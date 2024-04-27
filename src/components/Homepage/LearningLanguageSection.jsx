import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../assets/Images/Plan_your_lessons.png"
import CTAbutton from "./Button"


const LearningLanguageSection = () => {
  return (
    <div>
    <div className='flex flex-col gap-5 mt-[130px]'>
    <div className='text-4xl font-semibold text-center'>Your Swiss knife for <HighlightText text={"Learning any language"}/>

    </div>
    <div className='text-center text-richblack-600 mx-auto w-[55%]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>

    </div>
    <div className='flex flex-row justify-center items-center'>
    <img src={know_your_progress} alt="" className='-mr-32' />
    <img src={compare_with_others} alt="" />
    <img src={plan_your_lesson} alt="" className='-ml-36' />

    </div>
    <div className='flex justify-center mt-10 mb-12'>

    <CTAbutton active={true} linkto={"/signup"} >
        Learn More
    </CTAbutton>
    </div>
      
    </div>
  )
}

export default LearningLanguageSection
