import React from 'react';
import './Spinner.css';  

const Spinner = (props) => {
  return (
    <>
      <div className="spinner mx-auto mt-[50px]" style={{ borderColor: `${props.color} transparent ${props.color} transparent` }}></div>
      <p className="text-small-body text-white/70 mx-auto mt-5">Loading...</p>
    </>
  );
};

export default Spinner;
