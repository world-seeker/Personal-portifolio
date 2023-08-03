import React from 'react'
import Bodyheading from '../molecules/bodyheading'
import Education from '../molecules/Education'

import Skill from '../molecules/Skill'
import Personalproject from '../molecules/Projectpart'
import Professionalexperience from '../atoms/professionalexperience'

function Body() {
  return (
  <div className='text-xl space-y-2'> 
    <Bodyheading title='Summary' content="Result-oriented and enthusiastic Computer Science Engineer with a strong academic foundation and a passion for software
    development. Proficient in programming languages such as Javascript and Python, with a keen interest in web development
    and data analysis. Quick learner, adaptable and able to work well in a team environment. Seeking an entry-level position to
    apply technical skills and contribute to the success of a dynamic organization."/>
    <div className='space-y-2'>
     <Bodyheading title='Education'/>
     <Education/>
     <Bodyheading title='Personal Projects'/>
     <Personalproject/>
     <Skill/>
     <Professionalexperience/>
    </div>
  </div>
  )
}

export default Body