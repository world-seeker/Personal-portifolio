import React from 'react'
import Nametag from '../atoms/nametag';
import Num from '../atoms/numadd';
import Developer from '../atoms/developer';
import Email from '../atoms/email';
import Linkedin from '../atoms/linkedin';
import Address from '../atoms/address';


function Head() {
  return (
    <main className="flex  flex-col w-fit ">
     <Nametag/>
     <Developer/>
     <div className=' flex space-x-2'>
      <Num/>
      <Email/>
     </div>
     <div className=' flex space-x-10'>
      <Linkedin/>
      <Address/>
     </div>
  </main>
  )
}

export default Head