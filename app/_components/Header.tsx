'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usecont } from '../context/context'
import Link from 'next/link'
const Header = () => {
    const { cart, setCart } = usecont();
    const { login, setLogin } = usecont();
    const router = useRouter()
    const [press, setPress] = useState(false);
    const handleClick = () => {
        if (login) {
            localStorage.removeItem('token');
            setLogin(false);
            setPress(false)
            router.push('/')
        }
        else {
            router.push('/signup')
            setPress(false)
        }
    }
    return (
        <div className='w-full h-[60px] flex justify-between items-center'>
            <div className='flex items-center'>
                <Image className='ml-8' src={'/shopping-bag.png'} width={40} height={40} alt={''}></Image>
                <h1 className='font-bold ml-4 text-[25px]'>Shopy</h1>
            </div>
            <Link href={'/cart'} className='flex justify-center items-center'>
                <Image className='ml-[150px] md:ml-[600px]' src={'/cartt.png'} width={30} height={30} alt={''}></Image>
                <span className='relative right-5 bottom-2 text-pink-900 text-[12px]'>{cart}</span>
            </Link>

            {!press ? <Image onClick={() => setPress(true)} className='mr-8 cursor-pointer' src={'/menu.png'} width={40} height={40} alt={''}></Image> :
                <Image onClick={() => setPress(false)} className='mr-8 cursor-pointer' src={'/cross.png'} width={40} height={40} alt={''}></Image>
            }
            {press &&
                <div id="forbuger" className='w-full h-screen bg-white 
                  flex justify-center items-center flex-col
                  absolute top-[50px] 
                  md:
                '>
                    <Link onClick={() => setPress(false)} className='m-3 font-bold text-blue-900' href={'/'}>home</Link>
                    <button onClick={handleClick} className='m-3 font-bold text-blue-900'>
                        {login ? 'Logout' : 'Login'}
                    </button>
                </div>
            }
        </div>
    )
}

export default Header