import React, { useState } from 'react';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import Input from '../components/Input';
import Paginator from '../components/Paginator';

const Enterlinks = () => {
  const [link, setLink] = useState("");
  const [prototypeLink, setPrototypeLink] = useState("");

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-[20px] pt-[50px]">
        <Paginator className="bg-purple"/>
        <Paginator className="bg-grey-gradient-20"/>
        <Paginator className="bg-grey-gradient-20"/>
      </div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Card className="p-[60px]">
          <div className='flex flex-col'>
            <div className="flex flex-row justify-center mb-10">
              <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-small-body">
                  Figma Link
                </div>
                <Input placeholder='Link' value={link} setValue={setLink} />
              </div>
              <div className='flex flex-col gap-3'>
                <div className="text-white text-small-body">
                  {/* can make the above into a label component with prop */}
                  Prototype Link
                </div>
                <Input placeholder={'Link'} value={prototypeLink} setValue={setPrototypeLink} />
              </div>
              <ButtonPurp text="Next" type="submit" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Enterlinks;