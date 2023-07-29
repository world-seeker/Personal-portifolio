import React from 'react'
import Nametag from './icontag.tsx/nametag';
import Numadd from './icontag.tsx/numadd';
import Social from './icontag.tsx/social';


function Head() {
  return (
    <main className="flex  flex-col   p-1">
    <div className='relative top-0 left-0'>
     <Nametag/>
    <div className='space-y-1'>
    <div className='text-sm flex space-x-2'>
     <Numadd/>
    </div>
    <div className=''>
     <Social/>
    </div>
    </div>
    </div>
  </main>
  )
}

export default Head