'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    const [press,setPress]=useState(false);
    return (
        <div className='w-full h-[60px] flex justify-between items-center'>
            <div className='flex items-center'>
                <Image className='ml-8' src={'/shopping-bag.png'} width={40} height={40} alt={''}></Image>
                <h1 className='font-bold ml-4 text-[25px]'>Shopy</h1>
            </div>
            {!press? <Image onClick={()=>setPress(true)} className='mr-8 cursor-pointer' src={'/menu.png'} width={40} height={40} alt={''}></Image>:
            <Image onClick={()=>setPress(false)} className='mr-8 cursor-pointer' src={'/cross.png'} width={40} height={40} alt={''}></Image>
            }
              {press &&
                <div id="forbuger" className='w-full h-screen bg-white 
                  flex justify-center items-center flex-col
                  absolute top-[50px] 
                  md:
                '>
                     <Link  onClick={()=>setPress(false)} className='m-3 font-bold text-blue-900' href={'/'}>home</Link>
                    <Link  onClick={()=>setPress(false)} className='m-3 font-bold text-blue-900' href={'/signup'}>Login</Link>
                    <Link  onClick={()=>setPress(false)} className='m-3 font-bold text-blue-900' href={'/'}>Add To Cart</Link>
                    <Link  onClick={()=>setPress(false)} className='m-3 font-bold text-blue-900' href={'/'}>Log Out</Link>
           
                </div>
            }
           
            
        </div>
    )
}

export default Header