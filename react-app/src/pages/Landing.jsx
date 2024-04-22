import React from 'react';
import logo from '../images/pixel_logo.svg'
import ButtonWhite from '../components/Buttonwhite'
import { useLocation } from 'react-router-dom';
import './Landing.css'
import Card from '../components/Card';

const Landing = () => {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get('error');

  return (
    <div className='h-screen'>
      <img src={logo} alt="logo"/>
      <div className="flex flex-col justify-center items-center mt-[100px]">
        <h1 className="title-text text-center w-[686px]">Making sure your product is pixel perfect</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="header-text w-[686px] flex flex-row justify-center" id="header-container">Pixel streamlines UI compliance to make sure that your vision and your product are aligned</p>
      </div>
      {errorMessage && <p>Error: Authentication failed. Please try again.</p>}
      <form action={`${process.env.REACT_APP_API_URL}/login`} method="GET" id="landing-button">
        {/* use javascript on click */}
        <ButtonWhite text="Connect to Figma" type="submit"/>
      </form>
    </div>
  )
}

export default Landing;




