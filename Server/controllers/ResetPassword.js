const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto")

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    const  {email}  = req.body;
    const user = await User.findOne({email:email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email not registerd",
      });
    }
    //generate token
    const token = crypto.randomBytes(20).toString("hex");
    //update user by adding token and expiry time
    const updateDetail = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    //create url
    // const url = `http://localhost:3000/update-password/${token}`;
    const url = `https://e-learning-frontend-sigma.vercel.app/update-password/${token}`;
    //send mail containing the url
    await mailSender(
      email,
      "Password reset link",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    //return response
    return res.json({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somethig went wrong while sending the mail",
    });
  }
};

exports.resetPassword = async (req, res) => {
  //fetch data
  const { password, confirmPassword, token } = req.body;
  //validation
  if (password !== confirmPassword) {
    return res.json({
      success: false,
      message: "Password and current Password should be same",
    });
  }
  //get user credential from database using token
  const userDetails = User.findOne({ token: token });
  // if no enty invalid details
  if (!userDetails) {
    return res.json({
      success: false,
      message: "Token is invalid",
    });
  }
  //check expiry of token
  if (userDetails.resetPasswordExpires < Date.now()) {
    return res.json({
      success: false,
      message: "Token is expired please try again",
    });
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  //update password
  await User.findOneAndUpdate(
    { token: token },
    { password: hashedPassword },
    { new: true }
  );
  //return response
  return res.json({
    success: true,
    message: "Password change successfully",
  });
};
