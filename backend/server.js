const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connect=require("./config/dbconnect")
connect()


//middleware
app.use(express.json())



//routes
app.use("/api/auth")


























app.listen(3000,(req,res)=>{
    console.log("server is running");
    
})