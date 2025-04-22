import express from "express";
import { StartServer } from "./server.js";
import { DbConnection } from "./connections/db.Connection.js";

const SERVER_PORT = 5000;

const InitServer = () => {
    const app = express()
    StartServer(app);
    DbConnection();
    app.listen(SERVER_PORT,()=>{
        console.log("Server is up and Running on Port : %d",SERVER_PORT)
    })
}


InitServer()


