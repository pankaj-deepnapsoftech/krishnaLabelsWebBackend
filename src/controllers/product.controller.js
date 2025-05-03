import { productModel } from "../models/product.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from "../config/env.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create new product API
export const CreateProduct = AsyncHandler(async (req,res) => {
    const data = req.body;
    const { filename } = req.file;
    const imagepath = `${config.NODE_ENV !== "development" ? config.BACKEND_URL : config.LOCAL_BACKEND_URL}/${filename}`
    const newData = {
        ...data,
        image: imagepath
    };
    const result = await productModel.create(newData);
    return res.status(201).json({
        message:"Message Send",
        result
    });
});

// product pagination API
export const GetProductpage = AsyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const totalData = await productModel.countDocuments();
    const data = await productModel.find({})
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .exec();
    return res.status(200).json({ message: "Product data found", data ,totalData});
});

// update existing product API
export const UpdateProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const find = await productModel.findById(id);
    console.log('find 12', find)
    if (!find) {
        return res.status(404).json({
            message: "Data not found, try again",
        });
    }
    const data = req.body;
    let newData = { ...data };

    // Only update image if a file was uploaded
    if (req.file) {
        const { filename } = req.file;
        const imagepath = `${config.NODE_ENV !== "development" ? config.BACKEND_URL : config.LOCAL_BACKEND_URL}/${filename}`
        newData.image = imagepath;
    } else {
        newData.image = find.image;
    }
    await productModel.findByIdAndUpdate(id, newData);
    return res.status(201).json({
        message: "Product updated successfully",
    });
});

// delete product API
export const DeleteProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = await productModel.findById(id);
    if (!data) {
        return res.status(404).json({
            message: "data not found",
        });
    }
    await productModel.findByIdAndDelete(id);
    return res.status(201).json({
        message: "Product deleted successful",
    });
});







