import React from 'react'
import Paginator from '../components/Paginator';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';


const Submit = () => {
  return (
    <>
    <div className="flex flex-row justify-center items-center gap-[20px] py-[50px]">
      <Paginator className="bg-purple"/>
      <Paginator className="bg-purple"/>
      <Paginator className="bg-grey-gradient-20"/>
    </div>
    <div className='h-screen flex flex-col justify-center items-center py-[50px]'>
        <Card className="p-[60px]">
          <div className='flex flex-col'>
            <div className="flex flex-row justify-center mb-10">
              <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-col gap-10'>
            <div className="flex flex-col gap-6">
              <div className='flex flex-col gap-3'>
                <div className="text-white text-20px-font-size">
                  Figma Page
                </div>
                <Dropdown value="Select a Page" />
              </div>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-20px-font-size">
                  Figma Frame
                </div>
                <Dropdown value="Select a Frame" />
              </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-20px-font-size">
                  {/* can make the above into a label component with prop */}
                  Deployed Prototype
                </div>
                <Dropdown value="Select a Page" />
              </div>
              <ButtonPurp text="Run Pixel" type="submit" />
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Submit
