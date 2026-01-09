const express =  require("express");
const app = express()
require("dotenv").config()
const port = process.env.port

app.get("/",(req,res)=>{
    res.send("in route")
})

app.get("/login",(req,res)=>{
    res.send("<h1>  please login </h1>")
})

app.listen(port,()=>{
    console.log("running in 5000")
})