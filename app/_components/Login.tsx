'use client'
import React, { useState } from 'react'
const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    
      <div className='w-[90%] h-[300px] bg-white
       rounded flex justify-center items-center flex-col
        shadow-2xl'>
        <input type="text" className='w-[90%] h-[8vh] rounded my-5 border px-2'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="text" className='w-[90%] h-[8vh]  rounded my-5 border px-2'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <button className='text-blue-500 border border-blue-500 
        px-2 py-1 font-bold w-[90%] h-[8vh]  rounded mt-6'>Login</button>
      </div>
   
  )
}

export default page