const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require("../models/User")
//auth
exports.auth = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "")
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            })
        }
        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating the token"
        })
    }

}


//isStudent
exports.isStudent = async(req,res,next)=>{
   try{
    if(req.user.accountType!=="Student"){
        return res.status(500).json({
            success:false,
            message:"This is protected route for Student only"
        })
    }
    next();
   }catch(error){
    return res.status(500).json({
        success:false,
        message:"User account type can not be verified , Please try again later"
    })
   }

}

//isInstructor

exports.isInstructor = async(req,res,next)=>{
    try{
     if(req.user.accountType!=="Instructor"){
         return res.status(500).json({
             success:false,
             message:"This is protected route for Instructor only"
         })
     }
     next();
    }catch(error){
     return res.status(500).json({
         success:false,
         message:"User account type can not be verified , Please try again later"
     })
    }
 
}

//isAdmin

exports.isAdmin = async(req,res,next)=>{
    try{
     if(req.user.accountType!=="Admin"){
         return res.status(500).json({
             success:false,
             message:"This is protected route for Admin only"
         })
     }
     next();
    }catch(error){
     return res.status(500).json({
         success:false,
         message:"User account type can not be verified , Please try again later"
     })
    }
 
 }