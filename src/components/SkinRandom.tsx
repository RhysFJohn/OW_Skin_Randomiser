"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNavigate } from 'react-router-dom'

const SkinRandom = () => {
  const [formData, setFormData] = useState('')
  const router = useRouter();
  
  const handleInput = (e: any) => {
    e.preventDefault();
    setFormData(e.target.value)
  }

  const renderHeroInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hero = formData;
    let heroinput = hero.toLowerCase();
    switch (heroinput) {
      case "reaper":
        router.push(`/${heroinput}`)
        break;
      case "zenyatta":
        router.push(`/${heroinput}`)
        break;
      case "ashe":
        router.push(`/${heroinput}`)
        break;
      case "dva":
        router.push(`/${heroinput}`)
        break;
      case "sigma":
        router.push(`/${heroinput}`)
        break;
      case "soldier 76":
        router.push(`/soldier_76`)
        break;
    }
  }

  return (
    <div>
      <form onSubmit={renderHeroInput} className='grid grid-cols-1'>
        <label htmlFor="">OW Hero</label>
        <input type="text" className='text-black' onChange={handleInput} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SkinRandom