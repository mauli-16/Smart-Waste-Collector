const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const authorizeRoles=require("../middleware/roleMiddleware")
const router=express.Router()

//only citizen can access this route
router.get("/citizen",verifyToken,authorizeRoles("Citizen"),(req,res)=>{
    res.json({message:"only citizen"})
})


//only driver can access
router.get("/driver", verifyToken, authorizeRoles("Driver"),(req,res)=>{
    res.json({message:"only driver"})
})



//only admin can access
router.get("/admin", verifyToken, authorizeRoles("Admin"), (req,res)=>{
    res.json({message:"only admin"})
})

module.exports=router