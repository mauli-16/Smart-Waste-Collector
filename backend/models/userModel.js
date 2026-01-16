const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true
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
const User=mongoose.model("User",userSchema,"all_users")
module.exports=User