import { NextResponse } from "next/server"
import { ConnectDB } from "../connection/ConnectDB"
import { products } from "../connection/Schema";
export const GET=async()=>{
    try {
        await ConnectDB();
        const data=await products.find();
        return NextResponse.json({msg:"success",data})
    } catch (error) {
        return NextResponse.json({msg:error})
    }

}