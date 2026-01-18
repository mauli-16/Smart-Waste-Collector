const mongoose=require("mongoose")
const binSchema=new mongoose.Schema({
    binID: {
        type: Number,
        required: true,
        unique: true
    },
    latitude:{
        type: Number,
        required: true,
        
    },
    longitude:{
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
const Bin=mongoose.model("Bin",binSchema,"all_bins")
module.exports=Bin