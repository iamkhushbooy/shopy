'use client'
import React, { useEffect, useState } from 'react'
import Kurti from './_components/Kurti'
import { KurtiType } from './_components/Types'
const page = () => {
  const [data, setdata] = useState([])
  const getApi = async () => {
    const f = await fetch('api')
    const j = await f.json();
    console.log(j);
    setdata(j.data)
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <div className='w-full min-h-screen bg-slate-100
    flex flex-wrap
    '>
      {data.map((item: KurtiType, index) => (
        <>
          <Kurti
            _id={item._id}
            img={item.img}
            name={item.name}
            style={item.style}
            material={item.material}
            color={item.color}
            available={3}
            price={item.price}
            size={item.size}
          ></Kurti>
        </>
      ))}



    </div>
  )
}

export default page