import React from "react";
import Header from "../pages/header";
import "../index.css";
import Footer from "./footer";

function components() {
  return (
    <div className='w-[1876px] h-[1367px] -top-[201px] -left-[2069px] gap-0 '>
        <Header/>
        {/* <button className="2xl:w-[214px] 2xl:h-[38px] 2xl:p-[12px_20px] 2xl:gap-[8px]  xl:w-[214px] xl:h-[38px] xl:p-[12px_20px] xl:gap-[8px] md:w-[hug 214px] md:h-[hug 38px] md:p-[12px_20px] md:gap-[8px]  rounded bg-orange ">
            <p className="w-[174px] h-[14px] font-inter text-[14px] font-bold leading-[14px] tracking-[-2%] text-white ">
              Get free consultation
            </p>
          </button> */}
        <Footer/>
    </div>
  )
}

export default components