import express from "express";
import Users from "../models/Usermodels.js";
import { jwtSign } from "../middlewares/jwtSign.js";

export const login=async()=>{
    const {username, password}=req.body

    try {
        if(!username || ! password){ res.status(400).json({message:"Los campos son obligatorios"})
           return
        }
        const User= await Users.findOne({where:{username:username}})


        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({error:"Hubo un error, intentelo mas tarde"})
    }
}

export const register=async(req,res)=>{
    
    const {username, password}=req.body
    try {
        if(!username || ! password){ res.status(400).json({message:"Los campos son obligatorios"})
           return
        }

        const newUser= await Users.create({username,password})

        const token= jwtSign(newUser)
        res.status(201).json(token)

    } catch (error) {
        res.status(500).json({error:"Hubo un error, intentelo mas tarde"})
    }
}