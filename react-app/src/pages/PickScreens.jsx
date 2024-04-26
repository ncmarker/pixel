import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import Paginator from '../components/Paginator';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import InputDropdown from '../components/InputDropdown';
import Spinner from '../components/Spinner';


const PickScreens = () => {

  const location = useLocation();
  const [figmaPages, setFigmaPages] = useState([]);
  const [figmaFrames, setFigmaFrames] = useState([]);
  const [deployPages, setDeployPages] = useState([]);
  const [selectedFigmaPage, setSelectedFigmaPage] = useState(null);
  const [selectedFigmaFrame, setSelectedFigmaFrame] = useState(null);
  const [selectedDeployPage, setSelectedDeployPage] = useState(null);

  const [pageFrames, setPageFrames] = useState({});

  const [figmaPageErrorMsg, setFigmaPageErrorMsg] = useState("");
  const [figmaFrameErrorMsg, setFigmaFrameErrorMsg] = useState("");
  const [deployedErrorMsg, setDeployedErrorMsg] = useState("");

  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();


  useEffect(() => {
    // console.log('Location state:', location.state); // Check what's actually in location state

    // Ensure the data exists
    if (location.state?.pageData) {
      const { deployed_project_pages, page_frames } = location.state.pageData;

      // Deployed project pages likely an array of URLs
      setDeployPages(deployed_project_pages.map(url => ({ label: url, value: url })));

      // Figma pages are keys in the page_frames object
      const figmaPagesOptions = Object.keys(page_frames).map(pageName => ({
        label: pageName,
        value: pageName
      }));
      setFigmaPages(figmaPagesOptions);
      setPageFrames(page_frames);
    }
  }, [location.state]);

  const handleFigmaPageSelection = (selectedOption) => {
    setSelectedFigmaPage(selectedOption);

    const frameData = pageFrames[selectedOption] || []; 

    const transformedFrames = frameData.map(frame => ({
        name: frame[0],  // Frame name
        id: frame[1],    // Frame ID
        dimensions: {
            height: frame[2][0], // Height from dimensions array
            width: frame[2][1] // Width from dimensions array
        }
    }));

    setFigmaFrames(transformedFrames); 
    // console.log('Transformed Frames:', transformedFrames);
  };

  const handleFigmaFrameSelection = (selectedOption) => {
    setSelectedFigmaFrame(selectedOption);
  };

  const handleDeployPageSelection = (selectedOption) => {
    setSelectedDeployPage(selectedOption);
  };

  // make request to compare pages
  // need to send frame_id, width, height, and deployed link
  const handleSubmit = async () => {

    // Update error state accordingly
    setFigmaPageErrorMsg(selectedFigmaPage ? "" : "Please select a Figma page.");
    setFigmaFrameErrorMsg(selectedFigmaFrame ? "" : "Please select a Figma frame.");
    setDeployedErrorMsg(selectedDeployPage ? "" : "Please select a deployed page.");

    // make API request if all dropdowns selected
    if (selectedFigmaPage && selectedFigmaFrame && selectedDeployPage) {
      setLoading(true);
      const frame = figmaFrames.find(frame => frame.id === selectedFigmaFrame);

      console.log(selectedDeployPage);
      console.log(frame.dimensions.height);
      console.log(frame.dimensions.width);
      console.log(frame.id);

      try {
        const response = await Axios.post('http://localhost:3001/comparescreens', {
          frameID: frame.id,
          frameWidth: frame.dimensions.width,
          frameHeight: frame.dimensions.height,
          deployedLink: selectedDeployPage
        }, {
          withCredentials: true  // include cookies 
        });

        if (response.status === 200) {
          console.log("SUCCESS");
          console.log(response.data);
          console.log("MESSAGE");
          console.log(response.data.choices[0].message.content);
          console.log("IMAGE 2 PATH");
          console.log(response.data.image2_path);
          const messageContent = response.data.choices[0].message.content;

          navigate('/results', { state: { pageData: messageContent } });
        }
      } catch(error) {
          console.error('Error', error);
          // show error to user
          setFigmaPageErrorMsg("Error Processing Request.");
          setFigmaFrameErrorMsg("Error Processing Request.");
          setDeployedErrorMsg("Error Processing Request.");
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <div className="h-screen">
      <Paginator filledLines='2' className="mb-[159px] mt-[78px]"/>
      <div className="flex flex-col justify-center items-center" style={{width: "100vw", height: "75vh"}}>
      <Card className="p-[60px] flex flex-col gap-[40px]">
            <img className="w-[88px] mx-auto" src={logo} alt="pixel logo" />
            {loading ? ( 
                <Spinner color='var(--purple-main)'/>
            ) : (
              <>
              <div className='flex flex-col gap-[20px]'>
                <InputDropdown 
                  label="Figma Page" 
                  initValue="--Select a Page--"
                  options={figmaPages}
                  onChange={handleFigmaPageSelection}
                  value={selectedFigmaPage}
                  errorMsg={figmaPageErrorMsg}
                />
                <InputDropdown 
                  label="Figma Frame" 
                  initValue="--Select a Frame--"
                  options={figmaFrames.map(frame => ({ label: frame.name, value: frame.id }))}
                  onChange={handleFigmaFrameSelection}
                  value={selectedFigmaFrame}
                  errorMsg={figmaFrameErrorMsg}
                />
              </div>
              <InputDropdown 
                label="Deployed Page" 
                initValue="--Select a Page--"
                options={deployPages}
                onChange={handleDeployPageSelection}
                value={selectedDeployPage}
                errorMsg={deployedErrorMsg}
              />
              <ButtonPurp text="Run Pixel" clickHandle={handleSubmit}/>
              </>
            )}
      </Card>
      </div>
    </div>
  )
}

export default PickScreens
