import React from 'react';
import logo from '../images/pixel_logo_final.png'
import ButtonWhite from '../components/Buttonwhite'
import { useLocation } from 'react-router-dom';
import './Landing.css'

const Landing = () => {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get('error');

  return (
    <div>
      <img src={logo} alt="logo"/>
      <div className="flex flex-col justify-center items-center">
        <h1 className="title-text text-center">Making sure your product is pixel perfect</h1>
      </div>

      <div className="text-container">
        <h1 className="title-text w-[686px]">Making sure your product is pixel perfect</h1>
      </div>
      <div className="text-container">
        <p className="header-text flex flex-row justify-center" id="header-container">Pixel streamlines UI compliance to make sure that your vision and your product are aligned</p>
      </div>
      {errorMessage && <p>Error: Authentication failed. Please try again.</p>}
      <form action={`${process.env.REACT_APP_API_URL}/login`} method="GET">
        <ButtonWhite text="Connect to Figma" type="submit"/>
      </form>
    </div>
  )
}

export default Landing;




