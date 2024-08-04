import React from 'react'
import Image from 'next/image'
import { KurtiType } from './Types'
const Kurti = ({ _id, img, name, style, material, color, price, available, size }: KurtiType) => {
    return (
        <div className='w-[45%] border border-yellow-500 h-[300px] m-[2.5%]
        flex  flex-col
       '>
            <Image
                className='w-full h-[70%]'
                src={`/products/${img}.jpeg`} alt={''} width={100} height={120}
            ></Image>
            <div id="p" className='flex w-full h-[30%]'>
                <div className='flex w-[70%] h-full flex-col ml-1'>
                    <h1 className='text-[11px] capitalize'>{name}</h1>
                    <p className='text-[9px] font-light'>Style:{style}</p>
                    <p className='text-[9px] font-light'>Material:{material}</p>
                    <p className='text-[9px] font-light'>Colour:{color}</p>
                    <p className='text-[9px] font-light'>Available:{available}</p>
                    <p className='text-[9px] font-light'>Available-sizes{size.map((item, index) => <span className='ml-1'>{item}</span>)}</p>
                </div>
                <div className='w-[38%] h-full flex flex-col justify-between items-center'>
                    <p className='text-[12px] font-light mt-3'>&#8377;{price}</p>
                    <button className='p-1 m-1 text-[13px] 
            font-bold bg-green-400 text-blue-700 rounded
            hover:bg-green-500'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Kurti



