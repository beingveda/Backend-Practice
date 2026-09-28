import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const app = express();

app.use(express.json())

app.get("/api",(req,res)=>{
    res.status(200).json({
        message: "welcome to the authentication API"
    })
})

app.post("/api/auth/register", async(req,res)=>{

    const { email, name , password} = req.body
    //save data to db

    const user = await userModel.create({
        email,name,password
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        "abcc5a92f367831f3c3c7277d42bd962f9dc588957e4f6f9e592fbefcb8e227d"
    ) 
    res.status(201).json({
        message:"User Created successfully",
        data:{
            user:{
                email,
                name,
                id:user._id
            },
            token
        }
    })
})

export default app;