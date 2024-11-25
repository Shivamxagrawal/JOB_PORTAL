const express=require("express")
const isAuthenticated=require("../middlewares/isAuthenticated")
const{updateCompany,getCompanyById,getCompany,register}=require("../controllers/company.controller")


const router=express.Router()

router.route("/register").post(isAuthenticated,register)
router.route("/get").get(isAuthenticated,getCompany)
router.route("/get/:id").get(isAuthenticated,getCompanyById)
router.route("/update/:id").put(isAuthenticated,updateCompany)

module.exports = router;

