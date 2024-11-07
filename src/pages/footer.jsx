import React from "react";
import "../index.css";
import flogo from "../assets/Logo.png";

function footer() {
  return (
    <div className="2xl:w-[1440px] 2xl:h-[hug 266px] 2xl:top-[2319px] 2xl:pt-[40px] 2xl:pr-[80px] 2xl:pl-[80px] 2xl:gap-[40px] bg-primaryPurple ">
    

      <div className="2xl:w-[fill 1280px] 2xl:h-[Hug 141px] top-[1004px]  flex 2xl:justify-between  ">
        
        {/* img,note */}
        <div className=" 2xl:[fixed 413px] 2xl:h-[Hug 102px]">
          <img
            className=" sm:m-5 w-[238.89px] h-[36.11px] top -[-11.11px] sm:w-[238.89px] sm:h-[36.11px] sm:top-[-11.11px]"
            src={flogo}
            alt="footerlogo"
          />
          <br />
          <p className="  2xl:w-[413px] 2xl:h-[57px] sm:w-[335px] sm:h-[76px] text-[16px] leading-[19.2px] sm: text-white font-lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* tech.services */}
        <div className="2xl:w-[Hug 522px] 2xl:h-[Hug 141px] flex 2xl:gap-128">
          <div className="2xl:w-[fixed 197px] 2xl:h-[Hug 141px] grid 2xl:gap-12 ">
            <h3 className="w-[179px] h-[25px] text-white text-[21px] font-inter font-semibold leading-lh1">
              Our Technologies
            </h3>
            <ul className="w-[Hug 56px] h-[Hug 14px] grid gap-12 ">
              <li className="w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2">
                ReactJS
              </li>
              <li className="w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2">
                Gatsby
              </li>
              <li className="w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2">
                NextJs
              </li>
              <li className="w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2">
                NodeJs
              </li>
            </ul>
          </div>
          <div className="2xl:w-[fixed 197px] 2xl:h-[Hug 129px] grid 2xl:gap-12 ">
            <h4 className="w-[132px] h-[25px] text-white text-[21px] font-inter font-semibold leading-lh1">
              Our Services
            </h4>
            <ul className="w-[fill 197px] h-[Hug 92px] grid gap-12 ">
              <li className="w-[197px] h-[17px] font-medium text-white text-[14px] font-interleading-lh2 ">
                Social media Marketing
              </li>
              <li className="w-[197px] h-[34px] font-medium text-white text-[14px] font-inter leading-lh2">
                Web & Mobile App Development
              </li>
              <li className="w-[197px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2">
                Data & Analytics
              </li>
            </ul>
          </div>
           </div>
           
      </div>
      <div className="flex justify-center w-[fixed 30px] h-[hug 25px] gap-8 m-12 mb-4">
        <hr className="w-[630px] border-[1px]" />
        </div>

      <div className="flex justify-center w-[hug 257px] h-[hug 17px] gap-[16px]">
        <p className="font-medium text-white font-inter leading-lh2 text-[14px] w-[94px] h-[17px] ">
          Privacy Policy
        </p>
        <p className="mb-10 font-medium text-white font-inter leading-lh2 text-[14px] w-[131px] h-[17px">
          Terms & Conditions
        </p>
      </div>
      
    </div>
    
  );
}

export default footer;
