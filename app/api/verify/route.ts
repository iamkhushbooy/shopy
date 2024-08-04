
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ConnectDB } from "@/app/connection/ConnectDB";
import { users } from "@/app/connection/Schema";

export const GET=async(req:NextRequest,res:NextResponse)=>{
    try {
        const token= req.headers.get('auth');
        if(!token){
            return NextResponse.json(`you don't have token`)
        }
        const verified=jwt.verify(token,'khushboo')as JwtPayload;
        if(!verified){
            return NextResponse.json(`you can't verified because your token is Invalid`)
        }
        const email=verified.email;
        await ConnectDB()
        const result = await users.updateOne(
            { email: email },
            { $set: { verified: true } }
        );
        return NextResponse.json('Verification successfull')
    } catch (error) {
        return NextResponse.json('Verification failed')
    }
}