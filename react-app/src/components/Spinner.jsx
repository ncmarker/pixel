import React from 'react';
import './Spinner.css';  

const Spinner = (props) => {
  return (
    <div className="spinner mx-auto" style={{ borderColor: `${props.color} transparent ${props.color} transparent` }}></div>
  );
};

export default Spinner;
