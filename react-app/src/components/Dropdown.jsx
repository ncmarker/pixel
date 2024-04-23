import React from 'react'

const Dropdown = (props) => {
  return (
    <div>
    <select className="bg-white text-drop-down rounded-[8px] px-[18px] py-[12px] w-[380px]">
        <option disabled selected value>{props.value}</option>
        <option value="page">Test Page</option>
    </select>
    </div>
  )
}

export default Dropdown
