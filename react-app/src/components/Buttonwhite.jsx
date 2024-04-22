import React from 'react'
import './Buttonwhite.css'

const ButtonWhite = (props) => {
  return (
    <div className={`${props.className}`}>
      <button className="reg-button">{props.text}</button>
    </div>
  )
}

export default ButtonWhite
