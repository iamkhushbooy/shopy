import { ConnectDB } from "@/app/connection/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/connection/Schema";
import jwt from "jsonwebtoken";
import { transporter } from "@/app/emailconfig";
export const POST = async (req: NextRequest) => {
    try {
        const { name, email, phone, password, age } = await req.json();
        const verification_code = jwt.sign({ email }, 'khushboo', { expiresIn: '1hr' })
        const verificationLink = `${process.env.DEV}/verify?token=${verification_code}`
        await ConnectDB();
        const data = await users.create({ name, email, phone, password, age });
        await transporter.sendMail({
            from:'ky143858@gmail.com',
            to:email,
            subject:'Email Verification',
            html:`<p>Click on the link to verify:<a href="${verificationLink}">Verify Link</a></p> `
        })
        return NextResponse.json({ msg: 'You are registered successfully'});
    } catch (error) {
        return NextResponse.json({ msg: 'Registration failed' });
    }
};
