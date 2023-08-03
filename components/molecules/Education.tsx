import React from 'react'
import Edu from './edu'

function Education() {
  return (
    <div className='space-y-2 '>
         <div className='flex'>
           <Edu
            heading='Bachelor of Technology (B.Tech) inComputer Science Engineering'
            body='Shri Shankaracharya Technical Campus, 2019 - 2023'
            percentage='75/100'
           />
         </div>
         <div className='flex'>
            <Edu 
             heading="12th Board"
             body='Kakatiya Public School, Green Valley, 2018 - 2019'
             percentage="63/100"
            />
         </div>
         <div className='flex'>
            <Edu heading="10TH Board"
             body="Shri Chaitanya Techno School"
             percentage="86/100" />
         </div>
   </div>
  )
}

export default Education