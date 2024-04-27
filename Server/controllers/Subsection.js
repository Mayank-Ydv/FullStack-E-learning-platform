const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadToCloudinary } = require("../utils/imageUploader");

// add subsection api
exports.createSubSection = async (req, res) => {
  try {
    const { sectionId, title,timeDuration, description } = req.body;
    const video = req.files.video;
    if (!sectionId || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    console.log(video);
    console.log("before");
    // upload video to cloudinary
    const uploadDetails = await uploadToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    console.log("after");
    //create subsection
    const SubSectionDetail = await SubSection.create({
      title: title,
      timeDuration: timeDuration,
      description: description,
      videoUrl: uploadDetails.secure_url,
    });
    console.log(SubSectionDetail)
    // update subsection

    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          subSection: SubSectionDetail._id,
        },
      },
      { new: true }
    );
    return res.status(200).json({ success: true, data: updatedSection });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Subsection cannot be created",
    });
  }
};

exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, title, subSectionId, description } = req.body;
    const subSection = await SubSection.findById(subSectionId);

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      });
    }

    if (title !== undefined) {
      subSection.title = title;
    }

    if (description !== undefined) {
      subSection.description = description;
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.video;
      const uploadDetails = await uploadToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
      subSection.videoUrl = uploadDetails.secure_url;
      subSection.timeDuration = `${uploadDetails.duration}`;
    }

    await subSection.save();
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    return res.json({
      success: true,
      data: updatedSection,
      message: "Section updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    });
  }
};

exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body;
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    );
    const subSection = await SubSection.findByIdAndDelete({
      _id: subSectionId,
    });

    if (!subSection) {
      return res
        .status(404)
        .json({ success: false, message: "SubSection not found" });
    }
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    return res.json({
      success: true,
      data: updatedSection,
      message: "SubSection deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    });
  }
};
