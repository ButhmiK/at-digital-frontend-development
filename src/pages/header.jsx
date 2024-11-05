import React from "react";
import logo from "../assets/Logo.png";
import "../index.css";

function header() {
  return (
    <div>
      <div className="w-[fixed 1440px] h-[Hug 77px] flex justify-between p-26 pl-80  bg-primaryPurple ">
        <img className="w-[238.89px] h-[36.11px]" src={logo} alt="logo" />
        <div>
          <ul className="flex text-sm font-medium text-white cursor-pointer gap-28 font-inter w-[Hug 381px] h-[Hug 17px]">
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
