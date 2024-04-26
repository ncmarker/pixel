from openai import OpenAI
import base64
import requests

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def encode_image(image_path): 
    """
    takes in an image path
    returns: the base64 encoded data for the image
    """
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')
    
def compare_two_images(image1_path, image2_path):
    """
    takes in a path to two images
    makes request to GPT4-Vision to compare the two images
    returns: response as json
    """
    # image1_path = "testing/figma_resized.png"
    # image2_path = "testing/desktop_resized.png"

    base64_image1 = encode_image(image1_path)
    base64_image2 = encode_image(image2_path)

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }

    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "system", 
                "content": "You are a senior front-end quality assurance specialist that is being asked to compare the UI of two screens. The aim is to verify the consistency of UI elements between a Figma mockup (image 1) and a deployed website screenshot (image 2). Offer precise feedback only on discrepancies you are positive about. Format your response as plain JSON without any decorative or additional non-JSON text."
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Assess any distinct UI differences between the Figma mockup and the deployed image. Only report discrepancies that are explicitly clear, such as Text differences (words are mistyped), font styling, element presence or absence, alignment/spacing differences, and explicit color differences (red vs. green) for both text and fills. For subtler color and text variations, refrain from reporting. Maintain a 1:1 ratio presumption for any size or spacing issues. Provide me the following data for each error in JSON format, with no additional text or formatting: {'errorNum': 1, 'errorName': 'Heading text too bold', 'errorDescription': 'The heading containing \"Hello, Nick\" is bolder in the deployed prototype than it is in the Figma design', 'component': 'Heading text containing \"Hello, user\" in the top center of the page'}. Repeat this structure for each discrepancy identified."
                    }, 
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image1}"
                        },
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image2}"
                        },
                    },
                ],
            }
        ],
        "max_tokens": 500
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

    print(response.json())

    return response.json()
