import jwt from "jsonwebtoken";
import { UserModle } from "../models/User.model.js";
import { AsyncHandler, ErrorHandler } from "../utils/AsyncHandler.js";

export const isAuthenticated = AsyncHandler(async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        throw new ErrorHandler("Authorization token not provided", 401);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
        throw new ErrorHandler("Session expired, login again", 401);
    }

    const user = await UserModle.findOne({ email: verified?.email })

    if (!user) {
        throw new ErrorHandler("User doesn't exist", 400);
    }

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    if (
        verified.iat < currentTimeInSeconds &&
        verified.exp > currentTimeInSeconds
    ) {
        req.user = {
            email: user.email,
            password: user.password,
        };
        return next();
    }
    throw new ErrorHandler("Session expired, login again", 401);
});
