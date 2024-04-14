from selenium import webdriver

# driver = webdriver.PhantomJS()
driver = webdriver.Safari()

driver.set_window_size(1120, 550)  # need to get figma info to set window

driver.get("https://duckduckgo.com")

driver.quit()
