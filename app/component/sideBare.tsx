import Image from 'next/image'
import React from 'react'

const SideBare = () => {
  return (
    <div className='p-6 pb-10 w-full bg-white rounded-lg'>
     <h1 className='text-2xl font-bold  text-redbutton'>{"Your Cart (0)"}</h1>
     <div className='pt-8 grid items-center justify-center w-full bg-white rounded-md space-y-4'>
      <Image className="w-full col-span-1 size-36 rounded-full border border-white" src="/assets/images/illustration-empty-cart.svg" alt="your add" width={24} height={24}/>
      <p className="text-sm text-yellow-800"> Your added items will appear here</p>
     </div>
    </div>
  )
}

export default SideBare
