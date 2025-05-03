import cors from "cors";
import { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
// local imports
import { config } from "./config/env.config.js";
import MainRouter from "./routes/index.js";
import {fileURLToPath} from "url";
import path from "path" ;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const StartServer = (app) => {
    app.set('trust proxy', 1);
    app.use(json({limit:"10mb"}));
    app.use(urlencoded({extended:true,limit:"10mb"}));
    app.use(cors({
        origin:config.NODE_ENV !== 'development' ? config.CLIENT_URL : config.CLIENT_URL_LOCAL,
        credentials:true,
        methods:["POST","GET","PUT","PATCH","OPTIONS"]
    }));
    app.use(cookieParser());
    app.use('/file', express.static(path.join(__dirname, '../', 'public/temp')));

    app.use("/api/v1",MainRouter);
    
}