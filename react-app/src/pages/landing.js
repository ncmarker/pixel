import React from 'react';
import { useLocation } from 'react-router-dom';

export default function LandingPage() {

  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get('error');

  return (
    <div>
      <h1>Making sure your product is pixel perfect</h1>
      <p>Pixel streamlines UI compliance to make sure that your vision and your product are aligned</p>
      {errorMessage && <p>Error: Authentication failed. Please try again.</p>}
      <form action={`${process.env.REACT_APP_API_URL}/login`} method="GET">
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}
