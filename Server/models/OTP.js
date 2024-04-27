const mongoose = require("mongoose"); 
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/template/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true,

    },
    cratedAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    } 
});
// function to send mail


async function sendVerificationEmail(email , otp){
    try{
        const mailresponse = await mailSender(email,"Verification from StudyNotion" , emailTemplate(otp))
    }catch(error){
        console.log("error occured while sending mail " , error)
        throw error
    }

}
OTPSchema.pre("save" , async function(next){
    await sendVerificationEmail(this.email , this.otp)
    next()
})


module.exports = mongoose.model("OTP" , OTPSchema)