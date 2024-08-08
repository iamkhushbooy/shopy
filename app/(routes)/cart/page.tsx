'use client';
import React, { useEffect, useState } from 'react';
import Kurti from '@/app/_components/Kurti';
import { KurtiType } from '@/app/_components/Types';
const Page = () => {
  const [kurti,setKurti] = useState([])
  const getCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/cart', {
        headers: {
          auth: token,
        }
      });
      const data = await res.json();
      console.log(data);
      setKurti(data.datas)
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className='w-full min-h-screen'>
      {kurti.map((item:KurtiType,index)=>(
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
      ))}
    </div>
  )
};

export default Page;
