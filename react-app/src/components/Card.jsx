const Card = (props) => {
  return (
    <div className={`rounded-[8px] border-[#7D7D7D] border-[1px] bg-white-gradient backdrop-blur-lg w-[500px] mx-auto flex flex-col ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card
