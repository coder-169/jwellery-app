import Product from "@/app/models/Product";
import dbConnect from "@/app/utils/db";
import multer from "multer";
import path from "path";
// Set up the multer middleware with the desired configuration
const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(process.cwd(), "public/static"), // Set the destination directory
        filename: (req, file, callback) => {
            callback(null, file.originalname); // Use the original file name
        },
    }),
});

// Define the API route handler
export const config = {
    api: {
        bodyParser: false, // Disable the default Next.js body parsing
    },
};


export async function POST(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method Not Allowed" });
        return;
    }
    await dbConnect()
    // Use the `upload` middleware to handle the file upload
    upload.single("file")(req, res, async (err) => {
        try {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred during file upload
                res.status(500).json({ error: "Failed to upload file" });
            } else if (err) {
                // An unknown error occurred
                res.status(500).json({ error: "Unknown error" });
            } else {
                // File uploaded successfully
                let originalname = "";

                const body = await req.json()
                console.log(body)
                if (req.file) {
                    originalname = req.file.originalname;
                }
                const { price, name, category, } = body;
                let product = await Product.findOne({ name });
                if (product) {
                    return res
                        .status(400)
                        .json({ success: false, product, message: "Product name should be unique" });
                }
                console.log(originalname)
                product = await Product.create({
                    price,
                    thumbnail: originalname,
                    category,
                    name
                });
                res
                    .status(200)
                    .json({ success: true, video, message: "product added successfully" });
            }
        } catch (error) {
            res.status(200).json({ success: false, message: error.message });
        }
    });
};