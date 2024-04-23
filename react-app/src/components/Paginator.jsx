import React from 'react'

const Paginator = (props) => {
  // makes sure filled lines is between 0-3
  const validFilledLines = Math.max(0, Math.min(props.filledLines, 3));

  return (
    <div className={`flex flex-row justify-center items-center ${props.className}`}>
      {[...Array(3)].map((_, index) => (
        <PaginatorLine key={index} isPurple={index < validFilledLines} />
      ))}
    </div>
  )
}

export default Paginator;

// each mini line within the overall paginator
const PaginatorLine = ({isPurple}) => {
  const lineColor = isPurple ? 'bg-purple' : 'bg-grey-gradient-20';
  return (
    <div className={`h-[5px] w-[111px] ml-[20px] mr-[20px] ${lineColor}`}></div>
  )
}
