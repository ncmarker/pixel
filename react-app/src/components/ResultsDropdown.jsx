import Card from '../components/Card'
import CodeSnip from '../components/CodeSnip'


// props: HTMLCodeContent, CSSCodeContent, errorName, errorDescription, errorNum, onToggle, isActive
const ResultsDropdown = (props) => {

    return (
        <Card className='w-[750px] p-[40px] border-radius-[8px] hover:shadow-custom' onClick={props.onToggle}>
            <div className='flex flex-row gap-[20px] items-start'>
                <div className='min-w-[25px] h-[25px] bg-white rounded-[2px] flex justify-center items-center text-error-num mt-[5px]'>{props.errorNum}</div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-subtext'>{props.errorName}</p>
                        <p className='text-small-body text-white/60'>{props.errorDescription}</p>
                    </div>
                    {props.isActive && <div>
                    {<div className='flex flex-row rounded-md overflow-hidden w-[580px] shadow-light'>
                        <CodeSnip codeType="HTML" content={props.HTMLCodeContent} className="rounded-l-md"/>
                        <CodeSnip codeType="CSS" content={props.CSSCodeContent} className="rounded-r-md"/>   
                    </div>}   
                    </div>}          
                </div>
            </div>
        </Card> 
    )
  }
  
  export default ResultsDropdown;