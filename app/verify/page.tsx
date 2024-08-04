'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
const page = () => {
  const [msg, setMsg] = useState('')
  const search = useSearchParams()
  const token = search.get('token')
  const verifypage = async () => {
    const res = await axios.post('api/verify', {
      token
    })
    const data = res.data;
    setMsg(data)
  }
  useEffect(() => {
    verifypage();
  
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome🤗 </h1>
      <h2>Thankyou for sign up...</h2>
      <p className="ml-8 text-blue-600">{msg}</p>
    </div>
  )
}

export default page