import React from 'react';
import logo from '../images/pixel_logo.svg'
import ButtonWhite from '../components/Buttonwhite'
import { useLocation } from 'react-router-dom';
import axios from "axios";


const Landing = () => {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get('error');

  // function figmaAuth() {
  //   axios({
  //     method: "GET",
  //     url: {`${process.env.REACT_APP_API_URL}/login`}
  //   })
  //   .then((response) => console.log("Login Page"))
  // }

  return (
    <div className='h-screen'>
      <div className="p-[50px]">
      <img src={logo} alt="logo"/>
      </div>
      <div className="flex flex-col justify-center items-center pt-[50px]">
        <h1 className="title-text text-center">Making sure your product is</h1>
        <h1 className="title-text text-center">pixel perfect</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="header-text flex flex-row justify-center pt-[40px]" >Pixel streamlines UI compliance to make sure that your vision and your</p>
        <p className="header-text flex flex-row justify-center pb-[40px]">product are aligned</p>
      </div>
      {errorMessage && <p>Error: Authentication failed. Please try again.</p>}
      <form action={`${process.env.REACT_APP_API_URL}/login`} method="GET" className="flex justify-center align-items">
        {/* use javascript on click */}
        <ButtonWhite text="Connect to Figma" type="submit" className="pb-[20px]"/>
      </form>
    </div>
  )
}

export default Landing;




