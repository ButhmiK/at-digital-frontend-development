import React from "react";
import logo from "../assets/Logo.png";
import "../index.css";

function header() {
  return (
    <div>
      <div className="items-center screens:sm,md,xl,2xl w-[fixed 1440px] h-[Hug 77px] md:w-[fixed 768px] md:h-[hug 77px] sm:w-[fixed 375px] sm:h-[hug 77px] sm:justify-between sm:top-[26px] sm:right-[20px] sm:bottom-[26px] sm:left-[20px] flex justify-between p-26 pl-80 pr-80 pb-26  bg-primaryPurple ">
        <img
          className="w-[238.89px] h-[36.11px] top-[-11.11px] sm:w-[238.89px] sm:h-[25px] sm:top-[-11.11px] xl:w-[238.89px] xl:h-[36.11px]"
          src={logo}
          alt="logo"
        />
        <div className="w-[Hug 381px] h-[Hug 17px]  sm:hidden  xl:flex 2xl:flex   hidden md:flex md:w-[hug 381px] md:h-[hug 17px] md:gap-28 gap-28">
          <ul className="flex text-[14px] font-medium text-white cursor-pointer uppercase gap-28 font-inter w-[Hug 381px] h-[Hug 17px] leading-lh2">

            
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
