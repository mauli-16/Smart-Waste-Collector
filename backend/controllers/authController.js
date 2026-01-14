const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("../models/userModel")

const register=async(req,res)=>{
    try{
        const {username, password, mobileno, role}=req.body   
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser= new User({
        username,password:hashedPassword,mobileno,role})
        await newUser.save()
        res.status(201).json({
        message:`User registered with username ${username}`
    })
    }
    catch{
        res.status(500).json({
        message:"Something went wrong"})
    }

}




const login=async(req,res)=>{
    const {username, password}=req.body
}




module.exports={
    register,login
}