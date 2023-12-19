import { RequestHandler } from "express";
import {} from "../controllers/auth";


export const requestIntercepter: RequestHandler = (req, res, next) => {
    console.log(`➡️ ${res.statusCode} ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);
 
    next();
}