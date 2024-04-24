from flask import Flask, request, redirect, session, url_for, render_template, send_from_directory, jsonify
from flask_session import Session
from flask_cors import CORS
import requests
import json
import secrets

import os
from dotenv import load_dotenv

import save_local_img as sli
import scrape_url as su

# Load environment variables from .env file
load_dotenv()
CLIENT_ID = os.getenv("FIGMA_CLIENT_ID")
CLIENT_SECRET = os.getenv("FIGMA_CLIENT_SECRET")
REDIRECT_URI = 'http://localhost:3001/oauth/callback'  # Update if using a different redirect URI
SCOPE = 'files:read, file_variables:read,file_dev_resources:read,file_variables:write'
AUTHORIZE_URL = 'https://www.figma.com/oauth'
TOKEN_URL = 'https://www.figma.com/api/oauth/token'

REACT_APP_BASE_URL = 'http://localhost:3000'

# app = Flask(__name__)
app = Flask(__name__, static_folder='../react-app/public/index.html')

# Configure Flask-Session to use server-side sessions
app.config['SESSION_TYPE'] = 'filesystem'  # Use filesystem-based sessions
app.config['SESSION_FILE_DIR'] = './flask-sessions'  # Directory to store session files
app.config['SESSION_PERMANENT'] = False  # if not working change back to true
app.config['PERMANENT_SESSION_LIFETIME'] = 900  # Session lifetime in seconds (15 min)
# app.config["SESSION_COOKIE_SAMESITE"] = "None"
app.config["SESSION_COOKIE_SECURE"] = False  # set to true in production

Session(app)
CORS(app,supports_credentials=True)
app.secret_key = secrets.token_hex(16)

# generate a random 32 char string 
def generate_random_state():
    """
    generates a random 32 char string to use as the state for figma OAuth
    """
    state = secrets.token_urlsafe(32)
    return state


# get all figma frames from figma file/page link 
def fetch_frames(figma_file_url, access_token):
    """
    takes in a figma URL and a user's figma account access token
    makes request to figma api for data on all page names within the file and all frame names
    and frame ID within each page
    returns: a dictionary of page names as the key and a list of tuples as the value 
    for each key in form (frame name, frame id) for each frame within the respective page
    """
    headers = {'Authorization': f'Bearer {access_token}'}
    file_key = figma_file_url.split('/')[-2]
    session['file_key'] = file_key
    url = f'https://api.figma.com/v1/files/{file_key}'

    print(access_token)

    try: 
        response = requests.get(url, headers=headers)
        response.raise_for_status() # raise HTTP errors

        data = response.json()

        page_frames = {}
        # Extract frames from each canvas
        for canvas in data['document']['children']:
            if canvas['type'] == 'CANVAS':
                page_name = canvas['name']
                frames = []

                # Iterate over the children of the canvas (i.e. each paage)
                for child in canvas['children']:
                    if child['type'] == 'FRAME':
                        frame_dimensions = (child['absoluteBoundingBox']['width'], child['absoluteBoundingBox']['height'])
                        # append a tuple of in form (frame_name, frame_id, (width, height))
                        frames.append((child['name'], child['id'], frame_dimensions))

                # Add tuples to the dictionary with page name as key
                page_frames[page_name] = frames

        return True, page_frames
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching frames: {e}")
        return False, ['ERROR']
    

# get link for image download of a specific frame in a page from figma  
def fetch_image_download_link(access_token, node_id):
    """
    takes in a user's access token and a node ID (frame ID)
    makes a request for an exported image of the frame 
    returns: a link to the downloadable image
    """
    headers = {'Authorization': f'Bearer {access_token}'}
    file_key = session['file_key']
    url = f'https://api.figma.com/v1/images/{file_key}?ids={node_id}'
    
    try: 
        response = requests.get(url, headers=headers)
        response.raise_for_status() # raise HTTP errors

        data = response.json()

        img_link = data['images'][node_id]

        return img_link
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching frames: {e}")
        return ['ERROR']


@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/login')
def login():
    state = generate_random_state()
    session['state'] = state
    return redirect(f'{AUTHORIZE_URL}?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope={SCOPE}&response_type=code&state={state}')


@app.route('/oauth/callback', methods=["POST", "GET"])
def oauth_callback():
    code = request.args.get('code')
    state = request.args.get('state')

    if code and session['state'] == state:
        data = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI,
            'code': code,
            'grant_type': 'authorization_code'
        }
        response = requests.post(TOKEN_URL, data=data)
        access_token = response.json().get('access_token')

        # Save access token in session
        session['access_token'] = access_token
        session.modified = True

        # return redirect(url_for('home'))
        # success: redirect to the enter links page
        return redirect(REACT_APP_BASE_URL + '/enterlinks')
    else:
        # return 'Error: Failed to obtain authorization code'
        # failure: redirect back to landing page and display error
        return redirect(REACT_APP_BASE_URL + 'landing/?error=auth_failure')

    

# @app.route('/home', methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         figma_file_url = request.form['figma_file_url']
#         deployed_project_url = request.form['deployed_url']

#         page_frames = fetch_frames(figma_file_url, session.get('access_token'))
#         deployed_project_pages = su.get_pages_from_url(deployed_project_url)

#         session['page_frames'] = page_frames
#         # session['deployed_project_pages'] = deployed_project_pages

#         return render_template('home.html', page_frames=page_frames, deployed_project_pages=deployed_project_pages)
    
#     return render_template('home.html')

@app.route('/convertlinks', methods=['GET', 'POST'])
def convertLinks():
    if request.method == 'POST':
        data = request.get_json()
        figma_file_url = data.get('figmaLink')
        deployed_project_url = data.get('prototypeLink')

        page_frames_success, page_frames = fetch_frames(figma_file_url, session.get('access_token'))
        deployed_project_pages = su.get_pages_from_url(deployed_project_url)

        session['page_frames'] = page_frames
        # session['deployed_project_pages'] = deployed_project_pages

        if page_frames_success and page_frames is not None and deployed_project_pages is not None:
            # If both data are available, return them as JSON response
            return jsonify({'page_frames': page_frames, 'deployed_project_pages': deployed_project_pages})
        else:
            # If any error occurs, return an error message
            return jsonify({'error': 'Error fetching pages'}), 500


@app.route('/api/<page>/')
def api_get_page_frames(page):
    page_frames = session['page_frames']
    # returns a list of only the frame NAMES within the given page 
    page_frames_filtered = []
    for frame in page_frames[page]:
        page_frames_filtered.append(frame[0])
    return page_frames_filtered


@app.route('/api/compare/')
def api_get_image_link():
    page = request.args.get('selectedPage')
    frame = request.args.get('selectedFrame')
    deployedPage = request.args.get('selectedDeployedPage')
    page_frames = session['page_frames']
    node_id = -1
    frame_width = -1
    frame_height = -1
    for f in page_frames.get(page):
        if f[0] == frame:
            node_id = f[1]
            frame_width = f[2][0]
            frame_height = f[2][1]


    img_link1 = fetch_image_download_link(session.get('access_token'), node_id)
    image2_path = su.get_screenshot_of_page(deployedPage, frame_width, frame_height)

    response = sli.compare_url_images(img_link1, image2_path)

    return response



if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=3001)
    # was port 3000