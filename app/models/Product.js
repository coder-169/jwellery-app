import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: ""
    },

    thumbnail: {
        type: String,
        default: ""
    }
});
const Product = mongoose.models.Product || mongoose.model('Product',ProductSchema)
export default Product;
