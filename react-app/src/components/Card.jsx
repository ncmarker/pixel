const Card = (props) => {
  return (
    <div className={`rounded-[8px] border-[#7D7D7D] border-[1px] bg-white-gradient backdrop-blur-lg ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card
