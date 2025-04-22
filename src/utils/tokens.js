import jwt from "jsonwebtoken";
import { config } from "../config/env.config.js";

export const GenerateToken = (data,expiry) => {
    return jwt.sign(data,config.SECRET_KEY,{expiresIn:expiry});
};

export const VerifyToken = (token) => {
    return jwt.verify(token,config.SECRET_KEY);
};