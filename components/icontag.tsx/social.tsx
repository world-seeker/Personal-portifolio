import Link from 'next/link'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdAddLocationAlt } from 'react-icons/md'

function Social() {
  return (
    <div>
           <div className='flex space-x-8'>
      <div className='flex '>
        <span className='relative top-1'>
      <BsLinkedin/>
        </span>
      <Link  href='https://www.linkedin.com/in/swapnil-pandey-5ab553225/'>
        LinkedIn
        </Link>        
      </div>
      <div className='flex'>
      <span className='relative top-1  '>
        <MdAddLocationAlt/>
        </span>
        Raipur,Chhattisgarh
      </div>
      </div>
    </div>
  )
}

export default Social