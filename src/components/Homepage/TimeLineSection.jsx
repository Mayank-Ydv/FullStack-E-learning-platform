import React from "react";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import TimelineImage from "../../assets/Images/TimelineImage.png";
const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully commited to the success of the company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Fully commited to the success of the company",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "Fully commited to the success of the company",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Fully commited to the success of the company",
  },
];

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center  bg-[#F9F9F9]">
        <div className="flex flex-col gap-10 w-[45%]">
          {timeline.map((timeline, index) => {
            return (
              <div className="flex flex-row gap-5 " key={index}>
                <div className="w-[50px] h-[50px] bg-[#FFFFFF] flex items-center rounded-full justify-center">
                  <img src={timeline.Logo} alt="" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">
                    {timeline.heading}
                  </h2>
                  <p>{timeline.Description}</p>
                </div>
                <div className=""></div>
              </div>
            );
          })}
        </div>

        <div className="relative  shadow-blue-200">
          <img src={TimelineImage} alt="" className="shadow-white h-fit" />
          <div className="absolute bg-caribbeangreen-700 py-7  uppercase flex flex-row left-[50%] translate-x-[-50%] translate-y-[-30%]">
          <div className="flex items-center gap-5 border-r border-aribbeangreen-300 px-10">
            <p className="text-3xl font-bold text-white">10</p>
            <p className="text-caribbeangreen-300 font-thin ">years <br /> experience</p>
          </div>
          <div className="flex items-center gap-5 px-14 ">
            <p className="text-3xl font-bold text-white">250</p>
            <p className="text-caribbeangreen-300 font-thin ">Types of<br /> courses</p>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
