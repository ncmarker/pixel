import React from 'react'
import './Buttonpurp.css'


const ButtonPurp = (props) => {
  return (
    <button className="long-button" onClick={props.clickHandle}>{props.text}</button>
  )
}

export default ButtonPurp
