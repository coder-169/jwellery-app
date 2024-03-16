import Product from "@/app/models/Product";
import dbConnect from "@/app/utils/db";
import { NextResponse } from "next/server";
export async function POST(req, res) {

    try {
        const body = await req.json();
        if (process.env.PASSWORD !== body.password)
            return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
        await dbConnect()
        const { name } = body;
        let product = await Product.findOne({ name });
        if (product) {
            return NextResponse.json({ success: false, product, message: "Product name should be unique" }, { status: 400 });
        }
        product = await Product.create(body);
        return NextResponse.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ success: false, message: error.message });
    }
};
