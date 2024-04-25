import { React, useState } from 'react';
import image from '../images/desktop.png'
import ResultsDropdown from '../components/ResultsDropdown'
import Nav from '../components/Nav'



const ResultsPage = () => {


  const [activeIndex, setActiveIndex] = useState(null);

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
            <h1 className="text-28px-font-size">We found 3 differences between your Figma design and deployed prototype</h1>
            {[...Array(3)].map((_, index) => (
              <ResultsDropdown
                key={index}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
                children="Code code code code"
              />
            ))}
          </div>

        </div>
    </div>
  );
}

export default ResultsPage
