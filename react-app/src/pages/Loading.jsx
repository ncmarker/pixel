import React from 'react'
import Paginator from '../components/Paginator'
import Spinner from '../components/Spinner'
import Card from '../components/Card'
import logo from '../images/pixel_logo.svg'

const Loading = () => {
  return (
    <>
    <div className="h-screen">
      <Paginator filledLines='2' className="mt-10"/>
        <div className="flex flex-col justify-center items-center" style={{width: "100vw", height: "75vh"}}>
        <Card className="flex flex-col items-center mt-[100px] p-[60px]">
          <img className="w-[88px] mb-[55px]" src={logo} alt="pixel logo"/>
          <Spinner color='var(--purple-main)'/>
          <p className="flex justfify-center text-small-body text-white mt-5">Loading...</p>
        </Card>
        </div>
    </div>
    </>
  )
}

export default Loading
