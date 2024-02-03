import React from 'react'
import { Ashe_Skins } from '@/constants'
import Image from 'next/image'


const Ashe = () => {

  const randomAsheSkin = Ashe_Skins[Math.floor(Math.random() * Ashe_Skins.length)]
  
  return (
    <div className='flex min-h-screen flex-col items-center bg-ashe bg-cover'>
      <h1 className='text-xl bold p-4'>Ashe</h1>
      <div className="grid grid-cols-2 p-4">
        <div className="flex flex-col">
          <Image src={randomAsheSkin.image} alt={randomAsheSkin.name} width={750} height={750} />
        </div>
        <div className="flex flex-col p-12 m-12 bg-slate-600 bg-opacity-60">
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