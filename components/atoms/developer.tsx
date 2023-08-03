import React from 'react'
import { MdComputer } from 'react-icons/md'

function Developer() {
  return (
    <>
      <div className='flex space-x-1 items-center'>
        <span>
        <MdComputer/>
        </span>
        <span className='text-slate-400  font-bold '>
         Developer
        </span>
      </div>
    </>

  )
}

export default Developer