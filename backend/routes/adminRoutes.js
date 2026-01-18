const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const authorizeRoles=require("../middleware/roleMiddleware")
const adminController=require("../controllers/adminController")
const router=express.Router()

router.post("/", verifyToken, authorizeRoles("Admin"), adminController)

module.exports=router