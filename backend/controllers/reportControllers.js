const Bin=require("../models/binModel")
const Report=require("../models/reportModel")

const createReport=async(req,res)=>{
    try {
        const {binID, issueType, description}=req.body
        const bin = await Bin.findOne({ binID })
        if (!bin) {
            return res.status(404).json({ message: "Invalid bin ID" })
        }
        const newReport=new Report({
            binID:bin._id, issueType, description, reportedBy:req.user.id
        })
        
        await newReport.save()
       
        if(issueType=="Overflow" || issueType=="Full"){
            await Bin.findOneAndUpdate({
                binID:binID
            },{
                status:"Full"
            })
        }

        res.status(201).json({
            message:"Report Created"
        })
    } catch (error) {
        console.error("Error creating report:", error);
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        
        return res.status(500).json({
            message:"Failed to create report"
        })
    }

}
module.exports={createReport}