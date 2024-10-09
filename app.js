import express from "express";
import cors from "cors"
import router from "./src/api/api.ping.js";
import { conectarDB } from "./src/database/db.js";


const app= express()

app.use(cors())
app.use(express.Router())
app.use(express.json())

//raiz endpoint
app.get("/", (req, res)=>{
    res.send("hola mundo")
})
//db
conectarDB()

// en /ping
app.use("/ping",router)

//puerto
const PORT=process.env.PORT || 7000
app.listen(PORT, ()=>{
    console.log("Server corriendo en el puerto: ", PORT)
})