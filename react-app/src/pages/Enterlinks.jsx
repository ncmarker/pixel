import React, { useState } from 'react';
import ButtonPurp from '../components/Buttonpurp'
import logo from '../images/pixel_logo.svg'
import './Enterlinks.css'
import Card from '../components/Card';
import Input from '../components/Input';

const EnterLinks = () => {
  const [link, setLink] = useState("");
  const [prototypeLink, setPrototypeLink] = useState("");

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Card className=" p-[60px]">
        <div className='flex flex-col'>
          <div className="flex flex-row justify-center mb-10">
            <img src={logo} alt="logo"/>
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
                Prototype Link
              </div>
              <Input placeholder={'Link'} value={prototypeLink} setValue={setPrototypeLink} />
            </div>
            <ButtonPurp text="Next"/>
          </div>
        </div>
      </Card>
    </div>
    // <div className="card-container">
    //     <form className="input-card" action="/home" method="POST">
    //       <img src={logo} alt="logo"/>
    //         <label for="figma_file_url" className="label-text">Figma Link</label>
    //         <input type="text" id="figma_file_url" className="input-container" name="figma_file_url" placeholder="Enter link to Figma File" required/>

    //         <label for="deployed_url" className="label-text">Deployed Prototype Link</label>
    //         <input type="text" id="deployed_url" className="input-container" name="deployed_url" placeholder="Enter link to Deployed Project" required/>

    //         <ButtonPurp text="Next" type="submit" />
    //     </form>
    // </div>
  );
}

export default EnterLinks
