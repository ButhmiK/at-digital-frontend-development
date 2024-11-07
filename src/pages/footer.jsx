import React from "react";
import "../index.css";
import flogo from "../assets/Logo.png";

function footer() {
  return (
    <div className="sm:w-[375px] sm:h-[hug 599px] sm:top-[2744px] sm:pt-40 sm:pr-2 sm:pb-20 sm:gap-40 ">
    <div className=" bg-primaryPurple">
      <div className="w-[fixed 1440px] h-[Hug 266px] sm:w-[fill 335px] sm:h-[hug 121px] sm:gap-20 top-[1004px]  flex justify-between left-[99px] p-40 pr-80 pl-80 pb-20 ">
        <div className=" flexw-[fixed 413px] h-[Hug 102px]">
          <img
            className=" sm:m-5 w-[238.89px] h-[36.11px] top -[-11.11px] sm:w-[238.89px] sm:h-[36.11px] sm:top-[-11.11px]"
            src={flogo}
            alt="footerlogo"
          />
          <br />
          <p className="  w-[413px] h-[57px] sm:w-[335px] sm:h-[76px] sm:text-[16px] sm:leading-[19.2px] sm: text-white font-lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="w-[Hug 522px] h-[Hug 141px] flex gap-128">
          <div className="w-[fixed 197px] h-[Hug 141px] grid gap-12 ">
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
          <div className="w-[fixed 197px] h-[Hug 129px] grid gap-12 ">
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
      <div className="flex justify-center ">
        <hr className="w-[630px] h-[10px] mt-10" />
      </div>

      <div className="flex justify-center gap-[40px]">
        <p className="font-medium text-white font-inter leading-lh2">
          Privacy Policy
        </p>
        <p className="mb-10 font-medium text-white font-inter leading-lh2">
          Terms & Conditions
        </p>
      </div>
    </div>
    </div>
  );
}

export default footer;
