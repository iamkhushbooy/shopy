import { ConnectDB } from "@/app/connection/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/connection/Schema";
import jwt from "jsonwebtoken";
export const POST = async (req:NextRequest) => {
    try {
        const { email, password } = await req.json();
        await ConnectDB();
        const data = await users.findOne({ email, password });
        const token = jwt.sign({ email }, 'khushboo', { expiresIn: '1hr' })
        if (data) {
            return NextResponse.json({ msg: 'You are logged in successfully', token });
        } else {
            return NextResponse.json({ msg: 'Invalid email or password' });
        }
    } catch (error) {
        return NextResponse.json({ msg: 'An error occurred during login' });
    }
};
