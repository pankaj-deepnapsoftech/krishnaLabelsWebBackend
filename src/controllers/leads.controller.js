import { LeadsModel } from "../models/Leads.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";


export const createlead = AsyncHandler(async(req,res) => {
    const data = req.body;
    const result = await LeadsModel.create(data);
    return res.status(201).json({
        message:"Thanks for Your Interest",
        result
    })
});

export const getlead = AsyncHandler(async (req,res) => {
    const data = await LeadsModel.find();
    return res.status(200).json({
        message:"leads",
        data
    })
});