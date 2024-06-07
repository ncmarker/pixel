const InputText = (props) => {
    return (
      <div className="flex flex-col gap-[12px]">
        <label className="text-white text-small-body">{props.label}</label>
        <input 
            style={{ color: 'var(--text-input-color)' }}
            className={`bg-grey-gradient-20 px-[20px] py-[10px] rounded-[8px] ${props.errorMsg ? 'border-red-500 border-solid border-[1px]' : ''}`}
            placeholder={props.placeholder} 
            value={props.value} 
            onChange = {(e) => props.setValue(e.target.value)} 
        />
        <p className="text-red-500 text-[14px]">{props.errorMsg}</p>
      </div>
    )
  }
  
  export default InputText;