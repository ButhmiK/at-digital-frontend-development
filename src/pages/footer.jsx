import React from "react";
import "../index.css";
import flogo from "../assets/Logo.png";

function footer() {
  return (
    <div className=" w-[fixed 1440px] h-[Hug 77px] 2xl:h-[hug 266px] 2xl:top-[2319px] 2xl:pt-[40px] 2xl:pr-[80px] 2xl:pl-[80px] 2xl:gap-[40px]  xl:w-[fixed 1200px] xl:h-[hug 266px] xl:top-[2183px] xl:pt-[40px] xl:pr-[60px] xl:pl-[60px] xl:gap-[40px] md:w-[fixed 768px] md:h-[hug 428px] md:top-[2088px] md:p-[40px_40px_20px_40px] md:gap-[40px] sm:w-[fixed 375px] sm:h-[hug 599px] sm:top-[2744px] sm:p-[40px_20px_20px_20px] sm:gap-[40px] bg-primaryPurple ">
    

      <div className="2xl:w-[fill 1280px] 2xl:h-[Hug 141px] xl:w-[fill 1080px] xl:h-[Hug 141px] xl:gap[112px] md:w-[fill 688px] md:h-[Hug 303px] md:gap[60px] sm:w-[fill 335px] sm:h-[hug 474px] sm:gap-[60px] top-[1004px]  2xl:flex xl:flex 2xl:justify-between  xl:justify-between">
        
        {/* img,note */}
        <div className="2xl:[fixed 413px] 2xl:h-[Hug 102px] 2xl:gap-[20px] xl:w-[fixed 438px] xl:h-[hug 102px] gap-20 sm:w-[fill 335px] sm:h-[hug 121px] sm:justify-center ">
          <img
            className=" xl:w-[238.89px] xl:h-[36.11px]  w-[238.89px] h-[36.11px] top -[-11.11px] sm:w-[238.89px] sm:h-[36.11px] sm:top-[-11.11px] md:w-[238.89px] md:h-[36.11px] md:top-[-11.11px] md:mr-4"
            src={flogo}
            alt="footerlogo"
          />
          <br />
          <p className="2xl:w-[413px] 2xl:h-[57px] xl:w-[413px] xl:h-[57px] md:w-[413px] md:h-[57px] md:mb-16 md:-mt-4 sm:w-[330px] sm:h-[76px]  text-[16px] leading-[19.2px] font-normal  text-white font-lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* tech.services */}
        <div className=" 2xl:w-[Hug 522px] 2xl:h-[Hug 141px] 2xl:flex 2xl:gap-128 xl:w-[fill 530px] xl:[hug 141px] xl:gap-20  xl:flex md:w-[Hug 511px] md:h-[Hug 141px] md:gap-[79px] md:flex sm:w-[335px] sm:h-[293px] sm:gap-[40px] ">
          <div className="2xl:w-[fixed 197px] 2xl:h-[Hug 141px] grid 2xl:gap-12 xl:w-[255px] xl:h-[Hug 141px] xl:gap-12 md:w-[fixed 216px] md:h-[Hug 141px] md:gap-[12px] md:mr-12 sm:w-[fixed 216px] sm:h-[hug 141px] sm:gap-[12px] sm:mt-16">
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
          <div className="2xl:w-[fixed 197px] 2xl:h-[Hug 129px] grid 2xl:gap-12 xl:gap-12px xl:w-[fill 255px] xl:h-[Hug 112px] md:w-[fixed 216px] md:h-[Hug 112px] md:gap-[12px] sm:w-[fixed 216px] sm:h-[hug 112px] sm:gap-[12px] sm:mt-7 ">
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
        <p className="mb-10 font-medium text-white font-inter leading-lh2 text-[14px] w-[131px] h-[17px] sm:w-[fixed 375px] sm:h-[hug 599px] sm:top-[2744px] ">
          Terms & Conditions
        </p>
      </div>
      
    </div>
    
  );
}

export default footer;
