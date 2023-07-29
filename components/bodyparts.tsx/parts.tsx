import React from 'react'

function Parts({title,content}:any) {
  return (
    <div>
           <span className='font-extrabold'>
       {title}
    </span>
    <hr className='h-1 bg-black'></hr>
    <p>{content}</p>
    </div>
  )
}

export default Parts