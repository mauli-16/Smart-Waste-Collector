const mongoose=require("mongoose")
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
const Report=mongoose.model("Report",reportSchema)
module.exports=Report