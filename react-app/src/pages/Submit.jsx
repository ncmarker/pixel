import React, { useState } from 'react'
import Paginator from '../components/Paginator';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import Input from '../components/Input';


const Submit = () => {
    const [link, setLink] = useState("");
    const [prototypeLink, setPrototypeLink] = useState("");
  return (
    <>
    <div className="flex flex-row justify-center items-center gap-[20px] mt-[50px]">
      <Paginator className="bg-purple"/>
      <Paginator className="bg-purple"/>
      <Paginator className="bg-grey-gradient-20"/>
    </div>
    <div className='h-screen flex flex-col justify-center items-center'>
        <Card className="p-[60px]">
          <div className='flex flex-col'>
            <div className="flex flex-row justify-center mb-10">
              <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-col gap-10'>
            <div className="flex flex-col gap-6">
              <div className='flex flex-col gap-3'>
                <div className="text-white text-small-body">
                  Figma Page
                </div>
                <Input placeholder='Select a Page' value={link} setValue={setLink} />
              </div>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-small-body">
                  Figma Frame
                </div>
                <Input placeholder='Select a Frame' value={link} setValue={setLink} />
              </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-small-body">
                  {/* can make the above into a label component with prop */}
                  Deployed Prototype
                </div>
                <Input placeholder={'Select a Page'} value={prototypeLink} setValue={setPrototypeLink} />
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
