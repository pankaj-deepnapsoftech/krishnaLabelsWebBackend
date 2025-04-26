
import { Schema, model } from "mongoose";

const productSchema = new Schema({
    product_name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String},
});

export const productModel = model("product", productSchema);




