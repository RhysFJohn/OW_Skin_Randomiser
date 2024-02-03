import React from 'react'
import { Zenyatta_Skins } from '@/constants'
import Image from 'next/image'

const Zenyatta = () => {

  const randomZenyattaSkin = Zenyatta_Skins[Math.floor(Math.random() * Zenyatta_Skins.length)]

  return (
    <div className='flex min-h-screen flex-col items-center bg-zenyatta bg-cover'>
      <h1 className='text-xl bold p-4'>Zenyatta</h1>
      <div className="grid grid-cols-2 p-4">
        <div className="flex flex-col">
          <Image src={randomZenyattaSkin.image} alt={randomZenyattaSkin.name} width={750} height={750} />
        </div>
        <div className="flex flex-col p-12 m-12 bg-slate-600 bg-opacity-60">
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Name</h3>
            <h3 className='text-2xl'>{randomZenyattaSkin.name}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Rating</h3>
            <h3 className='text-2xl'>{randomZenyattaSkin.rating}</h3>
          </div>
          <div className='grid grid-cols-2'>
            <h3 className='text-2xl'>Coins</h3>
            <h3 className='text-2xl'>{randomZenyattaSkin.coins}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zenyatta