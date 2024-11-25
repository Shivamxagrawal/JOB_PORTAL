const express=require("express")
const isAuthenticated=require("../middlewares/isAuthenticated")
const {getAdminJobs,getJobById,getAllJobs,postJob}=require("../controllers/job.controller")

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

module.exports=router