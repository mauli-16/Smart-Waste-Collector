const mongoose=require("mongoose")
const reportSchema=new mongoose.Schema({
    binID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Bin",
        required: true,
        
    },
    issueType:{
        type: String,
        required:true,
    },
    description:{
        type:String,

    }, 
    reportedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    

},{timestamps:true})
const Report=mongoose.model("Report",reportSchema)
module.exports=Report