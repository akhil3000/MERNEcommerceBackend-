import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app=express();

app.listen(process.env.PORT,()=>console.log("Server Started"));
