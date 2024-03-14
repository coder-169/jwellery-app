import Product from "@/app/models/Product";
import dbConnect from "@/app/utils/db";
import { NextResponse } from "next/server";
// Set up the multer middleware with the desired configuration

export async function POST(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method Not Allowed" });
        return;
    }
    // Use the `upload` middleware to handle the file upload
    try {
        await dbConnect()
        const prods = await Product.find({})
        return NextResponse.json({ success: true, prods, message: "products fetched successfully" })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })

    }
};