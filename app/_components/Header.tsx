import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='w-full h-[60px] flex justify-between items-center'>
            <div className='flex items-center'>
                <Image className='ml-8' src={'/shopping-bag.png'} width={40} height={40} alt={''}></Image>
                <h1 className='font-bold ml-4 text-[25px]'>Shopy</h1>
            </div>
            <Image className='mr-8' src={'/menu.png'} width={40} height={40} alt={''}></Image>
        </div>
    )
}

export default Header