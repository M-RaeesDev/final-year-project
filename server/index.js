import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import listingRouter from "./routes/listing.route.js";
dotenv.config()

mongoose.connect(process.env.MongoDB)
.then(()=>{console.log("connected to database successfully");})
.catch(()=>{console.log('database error');})

const app = express();

app.use(express.json());
app.use(cookieParser())

app.listen(3000, ()=>{
    console.log("server is running on Port 3000");
    
});

app.use("/server/user", userRouter)
app.use('/server/auth', authRouter)
app.use('/server/listing', listingRouter)

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
}); 