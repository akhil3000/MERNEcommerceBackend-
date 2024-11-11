import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {userRouter} from "./routes/user";


const app=express();
app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
mongoose.connect(process.env.MONGODBURI).then(()=>{
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT,()=>console.log("Server Started"));
