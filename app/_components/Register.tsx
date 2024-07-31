'use client'
import React, { useState } from 'react'
const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    return (
            <div className='w-[80%] min-h-[400px] bg-white shadow-2xl flex flex-col  items-center justify-center rounded '>
                      <input type="text" className='w-[70%] h-[7vh] rounded my-4  border px-2'
                    placeholder='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input type="text" className='w-[70%] h-[7vh] rounded my-4 border px-2'
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="text" className='w-[70%] h-[7vh]  rounded my-4 border px-2'
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                      <input type="text" className='w-[70%] h-[7vh] rounded my-4 border px-2'
                    placeholder='age'
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <button className='text-blue-500 border border-blue-500 
                      font-bold w-[70%] h-[7vh]  rounded mt-6'>Register</button>
            </div>
   
    )
}

export default page