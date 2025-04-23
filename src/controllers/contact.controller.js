import { ContactModel } from "../models/contact.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";


export const CreateLead = AsyncHandler(async (req,res) => {
    const data = req.body;
    const result = await ContactModel.create(data);
    return res.status(201).json({
        message:"Message Send",
        result
    });
});


export const GetLead = AsyncHandler(async (req,res) => {
    const data = await ContactModel.find();
    return res.status(200).json({
        message:"data found",
        data
    })
});




