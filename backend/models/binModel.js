const mongoose=require("mongoose")
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
const Bin=mongoose.model("Bin",binSchemaSchema)
module.exports=Bin