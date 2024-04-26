import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../images/deployed-macbook.png'
import ResultsDropdown from '../components/ResultsDropdown'
import Nav from '../components/Nav'

// FOR DEMO
import mock_image_1 from '../images/mock_image_1.png'
import mock_image_2 from '../images/mock_image_2.png'



const ResultsPage = () => {

  const location = useLocation();
  const [errors, setErrors] = useState([]);

  const [activeIndex, setActiveIndex] = useState(null);

  // FOR DEMO
  const [imageSrc, setImageSrc] = useState(0);


  useEffect(() => {
    // console.log('Location state:', location.state); // Check what's actually in location state

    // Ensure the data exists
    if (location.state?.pageData) {
      // KEEP
      // const errorsDetected = JSON.parse(location.state.pageData);
      // setErrors(errorsDetected);

      // FOR DEMO
      setErrors(location.state?.pageData['errors']);
      if (location.state?.pageData['image'] == 1) {
        setImageSrc(mock_image_1);
      } else if (location.state?.pageData['image'] == 2) {
        setImageSrc(mock_image_2);
      }
      console.log("IMAGE:");
      console.log(location.state?.pageData['image']);

    }
  }, [location.state]);

  console.log(errors);
  console.log("Rendering errors, type:", typeof errors);

  // toggling the dropdowns to open and close
  const handleToggle = (index) => {
    setActiveIndex(prevActiveIndex => {
      console.log(`Toggling from ${prevActiveIndex} to ${index}`);
      return prevActiveIndex === index ? null : index;
    });
  };


  return (
    <div className="bg-[#0c0a2d]">
        <Nav/>
        <div className='flex flex-row gap-[50px] mx-[100px] mt-[50px] pb-[200px]'>
          <div className='max-w-[485px] py-[120px]'>
            {/* <img src={image} alt='test desktop'/> */}
            {/* FOR DEMO */}
            <img src={imageSrc} alt='test desktop'/>
          </div>
          <div className='flex flex-col gap-[40px] max-w-[750px]'>
            <h1 className="text-28px-font-size">We found {errors.length} difference(s) between your Figma design and deployed prototype</h1>
            {Array.isArray(errors) && errors.map((error, index) => (
              <ResultsDropdown
                key={index}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
                // KEEP
                // HTMLCodeContent="BETA" 
                // CSSCodeContent="BETA" 

                // FOR DEMO
                HTMLCodeContent={error.HTML.replace(/\\n/g, '\n')} 
                CSSCodeContent={error.CSS.replace(/\\n/g, '\n')}
                errorName={error.errorName} 
                errorDescription={error.errorDescription}
                errorNum={error.errorNum.toString()}
              />
            ))}
          </div>

        </div>
    </div>
  );
}

export default ResultsPage
