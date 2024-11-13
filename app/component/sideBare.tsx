import Image from 'next/image'
import React from 'react'

const SideBare = () => {
  return (
    <div className='p-6 w-full bg-white rounded-md'>
     <h1 className='text-2xl text-amber-700'>{"Your Cart (0)"}</h1>
     <div className='grid items-center justify-center w-full bg-white rounded-md'>
      <Image className="w-full p-1 col-span-1 size-28 rounded-full border border-white" src="/assets/images/illustration-empty-cart.svg" alt="your add" width={24} height={24}/>
      <p className="text-xs text-yellow-800"> Your added items will appear here</p>
     </div>
    </div>
  )
}

export default SideBare
