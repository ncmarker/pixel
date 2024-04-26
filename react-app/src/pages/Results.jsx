import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../images/deployed-macbook.png'
import ResultsDropdown from '../components/ResultsDropdown'
import Nav from '../components/Nav'



const ResultsPage = () => {

  const location = useLocation();
  const [errors, setErrors] = useState([]);

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // console.log('Location state:', location.state); // Check what's actually in location state

    // Ensure the data exists
    if (location.state?.pageData) {
      const errorsDetected = JSON.parse(location.state.pageData);
      setErrors(errorsDetected);
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
    <div className="h-screen">
        <Nav/>
        <div className='flex flex-row gap-[50px] mx-[100px] my-[50px]'>
          <div className='max-w-[485px] py-[150px]'>
            <img src={image} alt='test desktop'/>
          </div>
          <div className='flex flex-col gap-[40px] max-w-[750px]'>
            <h1 className="text-28px-font-size">We found {errors.length} difference(s) between your Figma design and deployed prototype</h1>
            {Array.isArray(errors) && errors.map((error, index) => (
              <ResultsDropdown
                key={index}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
                HTMLCodeContent="BETA" 
                CSSCodeContent="BETA" 
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
