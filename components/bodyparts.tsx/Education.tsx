import React from 'react'
import Parts from './parts'

function Education() {
  return (
    <div className='space-y-2 '>
     <div className='flex '>
      <h1>Bachelor of Technology (B.Tech) in Computer Science Engineering</h1>
      <p>Shri Shankaracharya Technical Campus, 2019 - 2023</p>
      <span className='ml-auto'>
      70/100
      </span>
     </div>
    <div className='flex'>
     <h1>12th Board</h1>
     <p>Kakatiya Public School, Green Valley, 2018 - 2019</p>
     <span className='ml-auto '>63/100</span>
    </div>
    <div className='flex'>
     <h1>10th Board</h1>
     <p>
Shri Chaitanya Techno School, 2015 - 2016</p>
     <span className='ml-auto'>86/100</span>
    </div>
  

   </div>
  )
}

export default Education