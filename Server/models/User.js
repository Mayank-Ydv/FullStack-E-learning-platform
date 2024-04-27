const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true
        
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true

    },
    password:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    accountType:{
        type:String,
        enum:["Admin" , "Student" , "Instructor"],
        require:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Profile"
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],
    image:{
        type:String,
        require:true
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courseProgess:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress"

    }],
     
})
module.exports =  mongoose.model("User", userSchema)