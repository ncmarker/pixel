import React from 'react';

const CodeSnip = (props) => {
  return (
    <div className='flex flex-col border-r border-white/20 ${className}'>
        <div className='flex flex-row bg-[#222222] h-[32px] w-[290px] '>
            <div className='px-[16px] py-[6px] bg-[#2E2E2E] w-[91px] flex justify-center items-center text-small-body text-white/60'>{props.codeType}</div>
        </div>
        <div className='bg-[#2E2E2E] w-[290px] text-small-body text-white/60 p-[24px] text-[12px]'>{props.content}</div>
    </div>
  );
}

export default CodeSnip
