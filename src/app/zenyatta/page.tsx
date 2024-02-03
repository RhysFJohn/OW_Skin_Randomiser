import React from 'react'
import { Zenyatta_Skins } from '@/constants'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenyatta | Overwatch 2',
  description: 'Generated by create next app',
}

const imageStyle = {
  position: 'absolute',
  objectFit: 'cover',
}

const Zenyatta = () => {

  const randomZenyattaSkin = Zenyatta_Skins[Math.floor(Math.random() * Zenyatta_Skins.length)]

  return (
    <div className='flex min-h-screen flex-col items-center bg-zenyatta bg-cover'>
      <h1 className='text-3xl bold p-4'>Zenyatta</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 p-4">
        <div className="flex flex-col md:w-[450px] md:h-[450px] sm:w-[250px] sm:h-[250px] relative">
          <Image 
            src={randomZenyattaSkin.image} 
            alt={randomZenyattaSkin.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col p-12 m-2 bg-slate-600 bg-opacity-6">
          <div className='grid grid-cols-2'>
            <h3 className='md:text-2xl sm:text-md'>Name</h3>
            <h3 className='md:text-2xl sm:text-md'>{randomZenyattaSkin.name}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='md:text-2xl sm:text-md'>Rating</h3>
            <h3 className='md:text-2xl sm:text-md'>{randomZenyattaSkin.rating}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='md:text-2xl sm:text-md'>Coins</h3>
            <h3 className='md:text-2xl sm:text-md'>{randomZenyattaSkin.coins}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zenyatta