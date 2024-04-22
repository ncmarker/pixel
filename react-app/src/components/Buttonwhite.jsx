import React from 'react'
import './Buttonwhite.css'

const ButtonWhite = (props) => {
  return (
    <div className="button-container">
      <button className="reg-button">{props.text}</button>
    </div>
  )
}

export default ButtonWhite
