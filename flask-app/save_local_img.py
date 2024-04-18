import requests
import tempfile
import os
# from PIL import Image

import img_comparison

def download_image(url):
    """
    takes in an image URL
    returns: image data from http request if no error, None if an error
    """
    response = requests.get(url)
    if response.status_code == 200:
        return response.content
    return None

def save_temp_image(image_data):
    """
    takes in image data from an http request
    saves the temporary image
    returns: a path to this temporary file
    """
    temp_file = tempfile.NamedTemporaryFile(suffix=".png", delete=False)
    temp_file.write(image_data)
    temp_file.close()
    return temp_file.name

def delete_temp_image(file_path):
    """
    takes in an image file path
    deletes the locally stored image 
    """
    os.remove(file_path)


def url_to_path(image_url):
    """
    Converts an image URL (input) to an image path (output). 
    returns: the image path or None if error downloading image
    """
    image_data = download_image(image_url)
    if image_data:
        temp_image_path = save_temp_image(image_data)
        return temp_image_path
    
    print("ERROR: FAILED TO DOWNLOAD URL:" + image_url)
    return None


def compare_url_images(url1, image2_path):
    """
    compares two URL images (input) by calling imported chatgpi api function
    uses helpers download_image and url_to_path for url to img path conversion
    uses helpers save_temp_image and delete_temp_image for temporarily image saving
    returns: the chatgpt api response on image comparison
    """
    image1_path = url_to_path(url1)

    comparison_response_json = img_comparison.compare_two_images(image1_path, image2_path)

    delete_temp_image(image1_path)
    delete_temp_image(image2_path)

    print("Temporary imag1e file deleted.")
    print("Temporary image2 file deleted.")

    return comparison_response_json
