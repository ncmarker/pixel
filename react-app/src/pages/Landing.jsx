import React from 'react';
import logo from '../images/pixel_logo.svg'
import ButtonWhite from '../components/Buttonwhite'
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get('error');

  return (
    <div className='h-screen overflow-y-hidden'>
      <img className="m-[50px]" src={logo} alt="logo"/>
      <h1 className="mx-auto mt-[240px] max-w-[686px] text-title text-center">Making sure your product is pixel perfect</h1>
      <p className="text-subtext mx-auto mb-[40px] mt-[40px] max-w-[726px]" >Pixel streamlines UI compliance to make sure that your vision and your product are aligned</p>
      {errorMessage && <p>Error: Authentication failed. Please try again.</p>}
      <form action={`${"http://localhost:3001"}/login`} method="GET" className="flex justify-center align-items">
        <ButtonWhite text="Connect to Figma" type="submit"/>
      </form>
    </div>
  )
}

export default Landing;




