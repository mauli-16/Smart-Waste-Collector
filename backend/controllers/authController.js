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
    try {
        console.log(req.body)
        const {username, password}=req.body
        const user=await User.findOne({username})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        const token=jwt.sign(
            {id: user._id, role: user.role},process.env.JWT_SECRET,{expiresIn:'1h'}
        )
        res.status(200).json({token})
    } catch (error) {
         return res.status(500).json({message:"Something went wrong"})
    }
}




module.exports={
    register,login
}