import { ConnectDB } from "@/app/connection/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/connection/Schema";

export const POST = async (req:NextRequest) => {
    try {
        const { name, email, phone, password, age } = await req.json();
        await ConnectDB();
        const data = await users.create({ name, email, phone, password, age });
        return NextResponse.json({ msg: 'You are registered successfully', data });
    } catch (error) {
        return NextResponse.json({ msg: 'Registration failed'});
    }
};
