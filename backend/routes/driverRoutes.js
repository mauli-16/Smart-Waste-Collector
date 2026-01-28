const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const authorizeRoles=require("../middleware/roleMiddleware")
const {areaReports}=require("../controllers/driverController")
const router=express.Router()

//only driver can access
router.get("/:area", verifyToken, authorizeRoles("Driver"),areaReports)

module.exports=router