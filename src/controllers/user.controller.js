import { config } from "../config/env.config.js";
import { UserModle } from "../models/User.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { GenerateToken } from "../utils/tokens.js";


export const CreateUser = AsyncHandler(async (req, res) => {
    const data = req.body;
    const find = await UserModle.find({});
    if (find.length !== 0) {
        return res.status(400).json({
            message: "admin already register"
        });
    };
    const newUser = await UserModle.create(data);
    return res.status(201).json({
        message: "user created successful",
        data: newUser
    })
});

export const login = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const find = await UserModle.findOne({ email });
    if (!find) {
        return res.status(400).json({
            message: "bad credentials"
        });
    };


    if (password != find.password) {
        return res.status(400).json({
            message: "bad credentials 1"
        });
    };

    const token = GenerateToken({ email: find.email }, '1day')
    res.cookie("tk", token, { httpOnly: true, sameSite: config.NODE_ENV === "development" ? "lax" : "none",
        secure: config.NODE_ENV !== "development", maxAge: 1000 * 60 * 60 * 24 })
    return res.status(200).json({
        message: "login successful"
    })
});

export const logout = AsyncHandler(async (_req, res) => {
    return res.clearCookie('tk').status(200).json({
        message: 'Logout Successful',
    });
});

export const logedInUser = AsyncHandler(async (req,res) => {
    const user = await UserModle.findOne({})
    return res.status(200).json({
        data:user
    })
});






