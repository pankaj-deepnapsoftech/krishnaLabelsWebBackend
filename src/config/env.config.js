import dotenv from "dotenv";
dotenv.config();


class Config {
    NODE_ENV;
    CLIENT_URL;
    MONGODB_URI;
    SECRET_KEY;
    constructor() {
        this.NODE_ENV = process.env.NODE_ENV;
        this.CLIENT_URL = process.env.CLIENT_URL;
        this.MONGODB_URI = process.env.MONGODB_URI;
        this.SECRET_KEY = process.env.SECRET_KEY;
        this.CLIENT_URL_LOCAL = process.env.CLIENT_URL_LOCAL;
    }
}

export const config = new Config()