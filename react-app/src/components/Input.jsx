const Input = (props) => {
  return (
    <input className="bg-white-gradient-20 text-white/60 px-5 py-2 rounded-[8px]" placeholder={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
  )
}

export default Input
