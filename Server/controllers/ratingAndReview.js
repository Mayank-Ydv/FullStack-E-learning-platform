const RatingandReview = require("../models/RatingAndReviews");
const Course = require("../models/Course");

exports.createRating = async (req, res) => {
  try {
    const userId = req.user.id;
    const { rating, review, courseId } = req.body;

    // check if user is enrolled or not
    const courseDetails = await Course.studentsEnrolled.include(userId);
    if (!courseDetails) {
      return res.status(403).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }
    // create rating and review
    const ratingReview = RatingandReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    // update the course with this rating and review
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );
    console.log(updatedCourseDetails);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAverageRating = async (req, res) => {
  try {
    const courseId = req.body.courseId;
    // calculate average rating
    const result = RatingandReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    if(result.length > 0){
        return res.status(200).json({
            success:true,
            averageRating:result[0].averageRating
        })
    }

    // if no rating rivew exist
    return res.status(200).json({
        success:true,
        message:"Average rating is 0, no ratings given till now",
        averageRating:0

    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message,
      });
  }
};

exports.getAllRatingAndReview = async(req, res)=>{
    try{
        const allReviews = RatingandReview.find({})
                                            .sort({rating:"desc"})
                                            .populate({
                                                path:"user",
                                                select:"firstName lastName email image"
                                            })
                                            .populate({
                                                path:"course",
                                                select:"courseName"
                                            })
                                            .exec()
    return res.status(200).json({
        success:true,
        message:"All reviews fetched successfully"
    })


    }catch(error){

    }
}
