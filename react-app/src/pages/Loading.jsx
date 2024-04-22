import React from 'react'

const Loading = () => {
  return (
    <>
    <div className="flex flex-row justify-center items-center gap-[20px] mt-[50px]">
      <Paginator className="bg-purple"/>
      <Paginator className="bg-purple"/>
      <Paginator className="bg-purple"/>
    </div>
    </>
  )
}

export default Loading
