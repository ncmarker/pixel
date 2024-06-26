import React from 'react'
import Select from 'react-select';

const Dropdown = (props) => {
    const customStyles = {
        // custom styling for options
        option: (provided) => ({
            ...provided,
            backgroundColor: '#DDE1E6', 
            padding: '12px 18px', 
        }),
        // custom styling for main select 
        control: (provided) => ({
            ...provided,
            backgroundColor: '#DDE1E6', 
            borderRadius: '8px', 
            padding: '4px 4px', 
            border: 'none',
            boxShadow: 'none', 
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            color: '#6E6E78',
        })
    };

    const options = props.options || [];

    return (
        <div className="flex flex-col gap-[12px]">
            <label className="text-white text-20px-font-size">{props.label}</label>
            <Select 
                styles={customStyles}
                classNamePrefix="react-select" 
                className="react-select-container" 
                options={options} 
                placeholder={props.initValue}
                value={options.find(option => option.value === props.value)}
                onChange={(selectedOption) => props.onChange(selectedOption.value)}
            />
            <p className="text-red-500 text-[14px]">{props.errorMsg}</p>
        </div>
    );
}

export default Dropdown;

