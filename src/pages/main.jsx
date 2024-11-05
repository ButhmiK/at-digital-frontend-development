import React from "react";
import Header from "../pages/header";
import "../index.css";
import hero from "../assets/Hero Image.png";

function main() {
  return (
    <div>
      <Header />
      <img className="w-[1520px] h-[700px] pt:77" src={hero} alt="heroimg" />
      <div className="w-[fixed 630px] h-[Hug 306px] absolute top-354 left-80 bg-gradient-to-r from-green to-blue">
        <h1 className="text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <button className="w[Hug 214px] h[Hug 38px] rounded border-inherit bg-orange text-white">
          Get free consultation
        </button>
      </div>
    </div>
  );
}

export default main;
