import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../components/Homepage/HighlightText";
import CTAButton from "../components/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/Homepage/CodeBlocks";
import Footer from "../components/common/Footer";
import TimeLineSection from "../components/Homepage/TimeLineSection";
import LearningLanguageSection from "../components/Homepage/LearningLanguageSection" ;
import InstructorSection from "../components/Homepage/InstructorSection";
import Exploremore from "../components/Homepage/Exploremore";





const Home = () => {
  return (
    <div>
     
      {/* { section 1} */}
      <div className="flex flex-col relative mx-auto w-11/12 items-center text-white justify-between max-w-maxContent ">
        <Link to="signup">
          <div className=" group mt-16 p-1  rounded-full  bg-richblack-800 mx-auto font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit justify-center flex">
            <div className="flex items-center gap-3 rounded-full group-hover:bg-richblack-900 px-10 py-[10px]">
              <p>Become an instructor</p>
              <FaArrowRightLong />
            </div>
          </div>
        </Link>

        <div className="flex gap-1 font-semibold text-4xl mt-7">
          Empower your future with
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-[90%] font-bold text-richblack-300 mt-4 text-center">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors. Learn More Book a Demo
        </div>
        <div className="flex gap-7  mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            {" "}
            <source src={Banner} />{" "}
          </video>
        </div>

        {/* {Code section 1} */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold gap-1 ">
                Unlock your
                <HighlightText text={"coding potential"} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login ",
              active: false,
            }}
            codeblock={`<<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            // gradient="bg-gradient-to-r from-[#8A2BE2] via-[#FFA500]  to-[#F8F8FF] opacity-[20%] w-[372.95px]  h-[257.05px]"
            
            
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* {Code Section 2} */}

        <div className="">
          <CodeBlocks
            position={"lg:flex-row-reverse "}
            heading={
              <div className="text-4xl font-semibold ">
                Start
                <HighlightText text={"coding in Seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login ",
              active: false,
            }}
            codeblock={`<<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <Exploremore/>
      </div>

      {/* {Section 2} */}
      <div className="bg-pure-greys-5 ">
        <div className="homepage_bg h-[400px]">
          <div className="w-11/12 flex flex-col item-center gap-5 mx-auto justify-between items-center">
            <div className="h-[100px] "></div>
            <div className="flex flex-row gap-7 text-white mt-24">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2 ">
                  Explore Full Catalog
                  <FaArrowRightLong />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent flex flex-col item-center gap-5 mx-auto justify-center ">
          <div className="flex flex-row gap-10 mt-[95px]  mb-10  ">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"that is in demand."} />
            </div>
            <div className=" w-[40%] items-start flex flex-col gap-7">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
              <div className="w-maxContent text-white ">
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
              </div>
            </div>
          </div>
        <TimeLineSection/>
        <LearningLanguageSection/>
        </div>
      </div>

      {/* {section 3} */}
      <div className="w-11/12 mx-auto  max-w-maxContent flex flex-col items-center justify-center bg-richblack-900 text-white gap-8 ">
      <InstructorSection/>
      <h2 className="text-4xl  font-semibold ">Reviews from other learners</h2>


      </div>
      <Footer />
      
    </div>
    

  );
};

export default Home;
