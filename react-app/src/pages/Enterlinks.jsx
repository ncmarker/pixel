import React from 'react';
import ButtonPurp from '../components/Buttonpurp'
import logo from '../images/pixel_logo_final.png'
import './Enterlinks.css'

const EnterLinks = () => {
  return (
    <div className="card-container">
        <form className="input-card" action="/home" method="POST">
          <img src={logo} alt="logo"/>
            <label for="figma_file_url" className="label-text">Figma Link</label>
            <input type="text" id="figma_file_url" className="input-container" name="figma_file_url" placeholder="Enter link to Figma File" required/>

            <label for="deployed_url" className="label-text">Deployed Prototype Link</label>
            <input type="text" id="deployed_url" className="input-container" name="deployed_url" placeholder="Enter link to Deployed Project" required/>

            <ButtonPurp text="Next" type="submit" />
        </form>
    </div>
  );
}

export default EnterLinks
