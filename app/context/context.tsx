'use client'
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
const Crtcon = createContext<any>(undefined);
export const AppWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [login, setLogin] = useState(false);
    const [cart,setCart]=useState(0)
    useEffect(()=>{
        const token=localStorage.getItem('token');
        token?setLogin(true):setLogin(false)
    },[])
   
    return (
        <Crtcon.Provider value={{ login, setLogin,cart ,setCart }}>
            {
                children
            }
        </Crtcon.Provider>
    )
}
export const usecont=()=>useContext(Crtcon);