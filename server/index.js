import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import testRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config()

mongoose.connect(process.env.MongoDB)
.then(()=>{console.log("connected to database successfully");})
.catch(()=>{console.log('database error');})

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("server is running on Port 3000");
    
});

app.use("/server/user", testRouter)
app.use('/server/auth', authRouter)