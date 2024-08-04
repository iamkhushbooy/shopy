'use client'
import axios from 'axios'
import React, { useState } from 'react'
const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [message, setMessage] = useState('')
    const register = async () => {
        const res = await axios.post('/api/register', {
            name, email, phone, password, age
        })
        setMessage(res.data.msg)
        console.log(res.data);

    }
    return (
        <div className='w-[90%] h-[500px] bg-white shadow-2xl flex flex-col  items-center justify-center rounded '>
            <input type="text" className='w-[90%] h-[7vh] rounded   border px-2'
                placeholder='name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type="text" className='w-[90%] h-[7vh] rounded border px-2 mt-5'
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type="text" className='w-[90%] h-[7vh] rounded border px-2 mt-5'
                placeholder='phone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <input type="text" className='w-[90%] h-[7vh]  rounded border px-2 mt-5'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <input type="text" className='w-[90%] h-[7vh] rounded border px-2 mt-5'
                placeholder='age'
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <button onClick={register} className='text-blue-500 border border-blue-500 
                      font-bold w-[90%] h-[7vh]  rounded mt-5'>Register</button>
            {message && (
                <div className='mt-5 text-yellow-500'>
                    {message}
                </div>
            )}
        </div>

    )
}

export default page