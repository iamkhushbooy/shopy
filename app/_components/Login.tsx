'use client'
import React, { useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router=useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage]=useState('')
  const login = async () => {
    const res = await axios.post('/api/login', {
      email,
      password,
    })
    console.log(res.data);
    setMessage(res.data.msg)
    localStorage.setItem('token', res.data.token)
    if (res.data.token) {
      router.push('/')
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    token && router.push('/')
  }, [])


  return (
    <div className='w-[90%] h-[350px] bg-white rounded flex justify-center items-center flex-col shadow-2xl'>
      <input
        type="text"
        className='w-[90%] h-[7vh] rounded border px-2'
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        className='w-[90%] h-[7vh] rounded border px-2 mt-10'
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        onClick={login}
        className='text-blue-500 border border-blue-500 px-2 py-1 font-bold w-[90%] h-[7vh] rounded mt-10'
      >
        Login
      </button>
      {message && (
        <div className='mt-5 text-yellow-500'>
          {message}
        </div>
      )}
    </div>
  )
}

export default Page
