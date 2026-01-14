const express=require("express")
const router=express.Router()

//only citizen can access this route
router.get("/citizen",(req,res)=>{
    res.json({message:"only citizen"})
})


//only driver can access
router.get("/driver",(req,res)=>{
    res.json({message:"only driver"})
})



//only admin can access
router.get("/admin",(req,res)=>{
    res.json({message:"only admin"})
})

module.exports=router