
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ConnectDB } from "@/app/connection/ConnectDB";
import { users } from "@/app/connection/Schema";

export const POST=async(req:NextRequest,res:NextResponse)=>{
    try {
        const {token}=await req.json();
        const jwtverified=jwt.verify(token,'khushboo') as JwtPayload
        const email=jwtverified.email;
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