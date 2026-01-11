const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected successfully");
        
    } catch(error){
        console.log(error);
        
    }
}
connect()
const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    mobileno:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        enum:["Admin", "Citizen","Driver"],
        default:"Citizen",
        required: true
    },

},{timestamps:true})
console.log(" user schema compiled")

const binSchema=new mongoose.Schema({
    binID: {
        type: Number,
        required: true,
        unique: true
    },
    Latitude:{
        type: Number,
        required: true,
        
    },
    Longitude:{
        type: Number,
        required: true,
        
    },
    status:{
        type: String,
        enum:["Empty","Full"],
        required: true
    },
    area:{
        type:String,
        required:true
    }

},{timestamps:true})

const reportSchema=new mongoose.Schema({
    reportID: {
        type: Number,
        required: true,
        unique: true
    },
    binID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Bin",
        required: true,
        
    },
    reportedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    

},{timestamps:true})

const User= mongoose.model("User",userSchema);
const Bin= mongoose.model("Bin",binSchema);
const Report= mongoose.model("Report",reportSchema);























app.listen(3000,(req,res)=>{
    console.log("server is running");
    
})