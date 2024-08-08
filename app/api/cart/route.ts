import { ConnectDB } from "@/app/connection/ConnectDB";
import { products, carts, users } from "@/app/connection/Schema";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { KurtiType } from "@/app/_components/Types";
export const GET = async (req: NextRequest) => {
    try {
        const token = req.headers.get('Authorization')?.split(' ')[1];
        if (!token) {
            return NextResponse.json('You are not logged in')
        }
        const verifytoken = jwt.verify(token, 'khushboo') as JwtPayload;
        if (!verifytoken) {
            return NextResponse.json('token expired')
        }
        const email = verifytoken.email;
        await ConnectDB();
        const user = await users.findOne({ email })
        const userId = user._id;
        const data = await carts.find({ userId });
        console.log(data);
        const datas: KurtiType[] = [];
        const datalength = data[0].product.length
        for (let i = 0; i < datalength; i++){
            const x = await products.findById(data[0].product[i])
            datas.push(x)
        }
        console.log(datas);
        return NextResponse.json({ datas });
    } catch (error) {
        return NextResponse.json({ error: 'error occured' });
    }
};


export const POST = async (req: NextRequest) => {
    try {
        const { token, productId } = await req.json();
        if (!token) {
            return NextResponse.json('You are not logged in')
        }
        const verifytoken = jwt.verify(token, 'khushboo') as JwtPayload;
        if (!verifytoken) {
            return NextResponse.json('token expired')
        }
        const email = verifytoken.email;
        await ConnectDB();
        const user = await users.findOne({ email })


        const userId = user._id;
        let userCart = await carts.findOne({ userId });
        if (!userCart) {
            userCart = await carts.create({ userId, product: [productId] })
        } else {
            userCart.product.push(productId);
            await userCart.save();
        }
        return NextResponse.json({ message: 'Product added to cart', cart: userCart });
    } catch (error) {
        return NextResponse.json({ error: 'error occured' });
    }
};
