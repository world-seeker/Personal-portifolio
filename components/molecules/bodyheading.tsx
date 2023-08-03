import React from 'react'

function Bodyheading({title,content}:any) {
  return (
    <div>
      <span className='font-extrabold'>
       {title}
      </span>
      <hr className='h-1 bg-orange-900'></hr>
      <p>{content}</p>
    </div>
  )
}

export default Bodyheading