import React from "react";
import logo from "../assets/Logo.png";
import "../index.css";

function header() {
  return (
    <div>
      <div className="w-[fixed 1440px] h-[Hug 77px] flex justify-between p-26 pl-80 pr-80 pb-26  bg-primaryPurple ">
        <img
          className="w-[238.89px] h-[36.11px] top-[-11.11px] sm:w-[238.89px] sm:h-[25px] xl:w-[238.89px] xl:h-[36.11px]"
          src={logo}
          alt="logo"
        />
        <div className="w-[Hug 381px] h-[Hug 17px] gap-28">
          <ul className="flex text-[14px] font-medium text-white cursor-pointer gap-28 font-inter w-[Hug 381px] h-[Hug 17px] leading-lh2">
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li> CONTACT US</li>
            <li> CAREERS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default header;
