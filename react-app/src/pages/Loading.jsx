import React from 'react'
import Paginator from '../components/Paginator'

const Loading = () => {
  return (
    <>
    <div className="h-screen">
        <div className="flex flex-row justify-center items-center gap-[20px] pt-[50px]">
        <Paginator className="bg-purple"/>
        <Paginator className="bg-purple"/>
        <Paginator className="bg-purple"/>
        </div>
    </div>
    </>
  )
}

export default Loading
