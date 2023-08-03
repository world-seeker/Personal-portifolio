import React from 'react'

function Edu({heading,body,percentage}:any) {
  return (
    <div className='w-full'> 
      <div>
        <div className='flex'>
          <h1>{heading}</h1>
          <p>{body}</p>
          <span className='ml-auto'>
           {percentage}
          </span>
        </div>
      </div> 
    </div>
  )
}

export default Edu