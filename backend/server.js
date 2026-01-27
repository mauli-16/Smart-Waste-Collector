const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connect=require("./config/dbconnect")
connect()
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes")


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/auth",authRoutes)
app.use("/api",userRoutes)
app.use("/api/admin",adminRoutes)


























app.listen(3000,(req,res)=>{
    console.log("server is running");
    
})