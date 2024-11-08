import React from "react";
import logo from "../assets/Logo.png";
import "../index.css";

function header() {
  return (
    <div>
      <div className="items-center screens:sm,xl,2xl w-[fixed 1440px] h-[Hug 77px] md:w-[fixed 768px] md:h-[hug 77px] sm:w-[fixed 375px] sm:h-[hug 77px] sm:p-[26px_20px] sm:justify-between flex justify-between p-26 pl-80 pr-80 pb-26 md:justify-between  bg-primaryPurple ">
        <img
          className="w-[238.89px] h-[36.11px] top-[-11.11px] sm:w-[238.89px] sm:h-[36.11px] sm:top-[-11.11px] xl:w-[238.89px] xl:h-[36.11px] md:w-[238.89px] md:h-[36.11px] "
          src={logo}
          alt="logo"
        />
        <div className="2xl:hidden xl:hidden md:hidden">
          <hr className="sm:w-[31px] sm:h-[4px] sm:top-[26.5px] sm:left-[324px] sm:rounded-[5px] sm:mb-2  bg-white" />
          <hr className="sm:w-[31px] sm:h-[4px] sm:top-[36.5px] sm:left-[324px] sm:rounded-[5px] sm:mb-2 bg-white"/>
          <hr className="sm:w-[31px] sm:h-[4px] sm:top-[46.5px] sm:left-[324px] sm:rounded-[5px] sm:mb-2 bg-white"/>
        </div>
        <div className="w-[Hug 381px] h-[Hug 17px]  sm:hidden  xl:flex 2xl:flex md:flex hidden gap-28">
          <ul className="flex text-[14px]  md:text-[10px] font-medium text-white cursor-pointer uppercase gap-28 font-inter w-[Hug 381px] h-[Hug 17px] leading-lh2">

            
            <li>services</li>
            <li>about us</li>
            <li>contact us</li>
            <li>careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default header;
