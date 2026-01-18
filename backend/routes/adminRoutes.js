const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const authorizeRoles=require("../middleware/roleMiddleware")
const {adminController,adminGetController}=require("../controllers/adminController")
const router=express.Router()

router.post("/", verifyToken, authorizeRoles("Admin"), adminController)
router.get("/", verifyToken, authorizeRoles("Admin"), adminGetController)

module.exports=router