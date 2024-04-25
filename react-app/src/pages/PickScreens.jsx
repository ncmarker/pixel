import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Paginator from '../components/Paginator';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import InputDropdown from '../components/InputDropdown';


const PickScreens = () => {

  const location = useLocation();
  const [figmaPages, setFigmaPages] = useState([]);
  const [deployPages, setDeployPages] = useState([]);
  const [selectedFigmaPage, setSelectedFigmaPage] = useState(null);
  const [selectedDeployPage, setSelectedDeployPage] = useState(null);

  useEffect(() => {
    console.log('Location state:', location.state); // Check what's actually in location state

    // Ensure the data exists
    if (location.state?.pageData) {
      console.log('got here 1');
      const { deployed_project_pages, page_frames } = location.state.pageData;

      // Deployed project pages likely an array of URLs
      setDeployPages(deployed_project_pages.map(url => ({ label: url, value: url })));

      // Figma pages are keys in the page_frames object
      const figmaPagesOptions = Object.keys(page_frames).map(pageName => ({
        label: pageName,
        value: pageName
      }));
      setFigmaPages(figmaPagesOptions);
      console.log(figmaPages);
    }
  }, [location.state]);

  const handleFigmaPageSelection = (selectedOption) => {
    setSelectedFigmaPage(selectedOption);
  };

  const handleDeployPageSelection = (selectedOption) => {
    setSelectedDeployPage(selectedOption);
  };

  // To pass to next page or handle data submission
  const handleSubmit = () => {
    // Navigate to next page or perform an action with the selected data
    console.log(selectedFigmaPage, selectedDeployPage);
    // navigate('/next', { state: { selectedFigmaPage, selectedDeployPage } });
  };



  return (
    <div className="h-screen overflow-y-hidden">
      <Paginator filledLines='2' className="mx-auto mb-[159px] mt-[78px]"/>
      <Card className="p-[60px] flex flex-col gap-[40px] min-h-[500px]">
            <img className="w-[88px] mx-auto" src={logo} alt="pixel logo" />
            <InputDropdown 
              label="Figma Page" 
              initValue="--Select a Page--"
              options={figmaPages}
              onChange={handleFigmaPageSelection}
              value={selectedFigmaPage}
            />
            <InputDropdown label="Figma Frame" initValue="--Select a Frame--"/>
            <InputDropdown 
              label="Deployed Page" 
              initValue="--Select a Page--"
              options={deployPages}
              onChange={handleDeployPageSelection}
              value={selectedDeployPage}
            />
      </Card>
    </div>
  )
}

export default PickScreens
