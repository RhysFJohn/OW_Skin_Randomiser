import React from 'react'
import { Ashe_Skins } from '@/constants'
import Image from 'next/image'


const Ashe = () => {

  const randomAsheSkin = Ashe_Skins[Math.floor(Math.random() * Ashe_Skins.length)]
  
  return (
    <div className='flex min-h-screen flex-col items-center bg-ashe bg-cover'>
      <h1 className='text-3xl bold p-4'>Ashe</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 p-4">
        <div className="flex flex-col md:w-[450px] md:h-[450px] sm:w-[250px] sm:h-[250px] relative">
          <Image 
            src={randomAsheSkin.image} 
            alt={randomAsheSkin.name} 
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col p-12 m-2 bg-slate-600 bg-opacity-6">
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Name</h3>
            <h3>{randomAsheSkin.name}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Rating</h3>
            <h3>{randomAsheSkin.rating}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Coins</h3>
            <h3>{randomAsheSkin.coins}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ashe