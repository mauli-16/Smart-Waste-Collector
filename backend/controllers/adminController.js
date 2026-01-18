const Bin=require("../models/binModel")
const adminController=async(req,res)=>{
    try {
        const {binID, latitude, longitude, status, area}=req.body
        const newBin= new Bin({
            binID, latitude, longitude, status, area
        })
        await newBin.save()
         return res.status(201).json({
        message:"created a bin"})

        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message:"Error while creating a new bin"
        })
    }
   
}
module.exports=adminController