from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from urllib.parse import urlparse
import tempfile


def get_pages_from_url(url):
    """
    Fetches all internal links from the specified URL.

    Args: url (str): The URL of the website to scrape.

    Returns: list: A list of internal links (URLs) found on the webpage.

    The function retrieves the base URL and removes any 'www.' prefix. 
    It then initializes a headless Chrome browser with the provided URL 
    and extracts all <a> tags with href attributes. 
    Only links with the same base URL as the provided URL are considered 
    as internal links. The function returns a list of internal links found.
    """
    # gets base url and removes 'www.'
    base_url = urlparse(url).netloc
    base_url = base_url.replace("www.", "")

    # creates a headless browser with the specified link
    options = Options()
    options.add_argument('--headless=new')
    driver = webdriver.Chrome(options=options)
    driver.set_window_size(1120, 550) # needed?
    driver.get(url)

    # iterates over all a tags with href and appends ones that have similar base url
    internal_links = [url]
    elems = driver.find_elements("xpath", "//a[@href]")
    for elem in elems:
        href = elem.get_attribute("href")
        parsed_href = urlparse(href)
        parsed_href_netloc = parsed_href.netloc.replace("www.", "")
        if parsed_href_netloc == base_url:
            if href not in internal_links:
                internal_links.append(href)
        
    # end headless browser
    driver.quit()

    return internal_links


def get_screenshot_of_page(url, window_width, window_height):
    """
    Takes a screenshot of the entire page after resizing the browser window.

    Args:
        url (str): The URL of the webpage to capture.
        window_width (int): The width of the browser window in pixels.
        window_height (int): The height of the browser window in pixels.

    Returns: str: The path to the temporary image file.

    This function initializes a headless Chrome browser with the specified URL.
    It then sets the window size of the browser window to the provided width and height.
    After that, it captures a screenshot of the entire page and saves it as a temporary file.
    The function returns the path to the temporry image file.
    """
    # creates a headless browser with the specified link
    options = Options()
    options.add_argument('--headless=new')
    driver = webdriver.Chrome(options=options)
    driver.set_window_size(window_width, window_height)
    driver.get(url)

    # takes screenshot and saves as temporary image file
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as temp_file:
        temp_file_path = temp_file.name
        driver.find_element('tag name', 'html').screenshot(temp_file_path)
   
    return temp_file_path
