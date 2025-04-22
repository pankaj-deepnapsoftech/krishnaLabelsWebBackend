import mongoose from "mongoose";
import { config } from "../config/env.config.js";

export const DbConnection = async () => {
    let isConnected = true;
    do{
        try {
            const connection = await mongoose.connect(config.MONGODB_URI,{dbName:"KrishnaLables"});
            console.log("database connected and host is : %s",connection.connection.host);
            isConnected = false;
        } catch (error) {
            console.log("databse not connected",error);
            console.log("Retry to connected Database .......");
            isConnected = true;
        }
    }while(isConnected)
};




