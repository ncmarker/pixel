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
    image1_path = "testing/figma_resized.png"
    image2_path = "testing/desktop_resized.png"

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
                "content": "Act as a senior quality assurance specialist for front-end UI design. The goal is to ensure that a Figma mockup (image 1) and a screenshot of the deployed image (image 2) match precisely in terms of their UI. Be very specific, clear, and concise with your feedback."
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Identify and highlight any differences between the Figma mockup and the deployed image related to: specific color discrepancies (including specific hex codes), specific font-size, font-weight, and font-style differences, specific spacing differences (margin and padding), and page/component layout inconsistencies. Assume the images are a 1:1 ratio, so any size/spacing discrepancies must be noted. Provide short, clear, and direct feedback on each identified difference in a list format, mentioning the specific location on the images where the variance occurs."
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
        "max_tokens": 300
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

    print(response.json())

    return response.json()
