import express from "express";
import { Router } from "express";
import {register }from "../controllers/ping.controllers.js";

const router=Router()



router.post("/register", register)




export default router