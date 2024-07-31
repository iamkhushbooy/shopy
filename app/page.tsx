'use client'
import React, { useState } from 'react'
import Login from './_components/Login'
import Register from './_components/Register'
const page = () => {
  const [handle, setHandle] = useState(false)
  return (
    <div className='w-full h-[100vh] flex py-[70px] items-center bg-[#efecec75] flex-col'>
      {!handle ?
        <>
          <Login></Login>
        <div className='flex flex-row m-5'>
        <p className='mx-2 '>Don't have an account ?</p>
        <button onClick={()=>setHandle(true)} className='text-blue-500'>Register</button>
        </div>
        </>
        :
        <>
          <Register></Register>
         <div className='flex flex-row mt-5'>
         <p className='mx-2'>Already you have an account ?</p>
         <button  onClick={()=>setHandle(false)} className='text-blue-500'>Login</button>
         </div>
        </>
      }
    </div>
  )
}

export default page