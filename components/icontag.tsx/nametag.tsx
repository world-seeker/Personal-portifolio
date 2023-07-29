import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { MdComputer } from 'react-icons/md'

function Nametag() {
  return (
    <div>  
    <div className='flex space-x-1'>
    <span className='relative top-1.5'>
    <BsPersonCircle/>
    </span>
    <div className='font-extrabold
      text-xl'>
   Swapnil Pandey
    </div>
    </div>

    <div className='text-slate-400  font-bold  w-fit    '>
      <div className='flex space-x-1 '>
    <span className='relative top-1'>
      <MdComputer/>
      </span>
    <span >Developer</span>
      </div>
    </div>
    </div>
    
  )
}

export default Nametag