import React from 'react'
import Parts from './bodyparts.tsx/parts'
import Education from './bodyparts.tsx/Education'
import Projectpart from './bodyparts.tsx/Projectpart'
import Skill from './bodyparts.tsx/Skill'

function Body() {
  return (
    <div className='text-xl'> 
    <Parts title='Summary' content='Result-oriented and enthusiastic Computer Science Engineer with a strong academic foundation and a passion for software
development. Proficient in programming languages such as Javascript and Python, with a keen interest in web development
and data analysis. Quick learner, adaptable and able to work well in a team environment. Seeking an entry-level position to
apply technical skills and contribute to the success of a dynamic organization.'/>
<br></br>
<div className='space-y-2'>
<Parts title='Education'/>
<Education/>
<Parts title='Personal Projects'/>
<Projectpart/>
<Skill/>
</div>
    </div>
  )
}

export default Body