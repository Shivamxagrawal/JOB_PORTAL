const Company=require("../models/company.model")

const register=async (req,res)=>{
    try {
        const {companyName}=req.body
        if(!companyName){
            return res.status(400).json({
                message:"Comapany name is required.",
                success:false
            })
        }
        let company=await Company.findOne({name:companyName})
        if(company){
            return res.status(400).json({
                message:"Company already exists",
                success:false
            })
        }
        company=await Company.create({
            name:companyName,
            userId:req.id
        })
        return res.status(201).json({
            message:"company registered successfully",
            company,
            success:true
        })
    } catch (error) {
        
    }
}
const getCompany=async (req,res)=>{
    try {
        const userId=req.id;
        const companies=await Company.find({userId})
        if(!companies){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(201).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
const getCompanyById=async (req,res)=>{
    try {
        const companyId=req.params.id;
        const company= await Company.findById(companyId)
        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })

        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
const updateCompany= async (req,res)=>{
    try {
        const {name,description,website,location}=req.body
        const file=req.file
        const updateData={name,description,website,location}

        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true})
        if(!company){
            return res.status(404).json({
                message:"company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"company updateed successfully",
            company,
            success:true
        })
        
    } catch (error) {
        
    }
}
module.exports={updateCompany,getCompanyById,getCompany,register}