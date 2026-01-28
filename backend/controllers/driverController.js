const Report=require("../models/reportModel")
const Bin=require("../models/binModel")

const areaReports=async(req,res)=>{
    try {
        const {area}=req.params
        const reports=await Report.find().populate({path:"binID", match:{area:area}})
        const filteredReports=reports.filter(r => r.binID !== null)
        res.status(200).json(filteredReports)
        
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch reports" })
    }
}
module.exports={areaReports}