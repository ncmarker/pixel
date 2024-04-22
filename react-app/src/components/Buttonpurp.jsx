import React from 'react'
import './Buttonpurp.css'


const ButtonPurp = (props) => {
  return (
    <div className="button-container" id="long-button-size">
      <button className="long-button">{props.text}</button>
    </div>
  )
}

export default ButtonPurp
