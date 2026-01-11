import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import express from "express"
import connectDb from "./db/index.js"

import dotenv from "dotenv"
const app = express()

dotenv.config({
    path: "./env"
})



connectDb()














// ;(async()=>{
//     try{
//         await mongoose.connext(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("application not able to talk to mongodb")
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log("app is listenning")
//         })
//     }catch(error){
//         console.log("Error",error)
//         throw error
//     }
// })() //ifis