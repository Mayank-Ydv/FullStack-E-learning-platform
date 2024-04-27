const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        require:true,
        trim:true
    },
    courseDescription:{
        type:String,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,

    },
    whatWillYouLearn:{
        type:String,
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingandReviews"

    }],
    price:{
        type:Number,
        require:true
    },
    thumbnail:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"

    },
    tag:{
        type:[String],
        required:true

    },
    instructions: {
		type: [String],
	},
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    }]
});
module.exports = mongoose.model("Course" , courseSchema)