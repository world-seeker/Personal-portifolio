import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'


function Nametag() {
  return (
    <div >  
      <div className='flex space-x-1 items-center  font-bold'>
       <BsPersonCircle/>
       <span>
         Swapnil Pandey
       </span>
     </div>
    </div>
    
  )
}

export default Nametag