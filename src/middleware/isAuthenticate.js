import { UserModle } from "../models/User.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { VerifyToken } from "../utils/tokens.js";

export const isAuthenticated = AsyncHandler(async (req, res, next) => {
    const {tk} = req.cookies;
    if(!tk){
        return res.status(404).json({
            message:"user not logedin"
        })
    }
    const {email} = VerifyToken(tk);
    const user = await UserModle.findOne({email});
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    next()
});
