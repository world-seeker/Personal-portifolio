import Link from 'next/link'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'

function Linkedin() {
  return (
    <>
           <div className='text-blue-400'>
          <Link  href='https://www.linkedin.com/in/swapnil-pandey-5ab553225/'>
          <div className='flex items-center '>
           <BsLinkedin/>&nbsp;
            <strong>
            LinkedIn
            </strong>
          </div>
          </Link>        
       </div>
    </>
  )
}

export default Linkedin