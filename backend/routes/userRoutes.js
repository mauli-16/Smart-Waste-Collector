const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const authorizeRoles=require("../middleware/roleMiddleware")
const {createReport}=require("../controllers/reportControllers")
const router=express.Router()

//only citizen can access this route
router.post("/citizen/createReport",verifyToken,authorizeRoles("Citizen"),createReport)


//only driver can access
router.get("/driver", verifyToken, authorizeRoles("Driver"),(req,res)=>{
    res.json({message:"only driver"})
})



//only admin can access
// router.get("/admin", verifyToken, authorizeRoles("Admin"), (req,res)=>{
//     res.json({message:"only admin"})
// })

module.exports=router