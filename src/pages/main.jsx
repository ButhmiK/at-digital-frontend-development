import React from "react";
import Header from "../pages/header";
import "../index.css";
import hero from "../assets/Hero Image.png";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";

function main() {
  return (
    <div>
      <Header />
      {/* <img className="w-[1400px] h-[700px] sm:w[375px] sm:h-[218px] md:w-[768px] md:h-[448px] xl:w-[1200px] xl:h-[700px] pt:77" src={hero} alt="heroimg" /> */}
      <img className="w-[1520px]" src={hero} alt="heroimg" />
      <div className="w-[fixed 630px] h-[Hug 306px] absolute top-[354px] left-[80px] p-24 pr-40 pb-32 pl-40 gap-20 bg-gradient-to-r from-green to-blue">
        <div className="w-[556px] h-[192px]">
          <h1 className="font-bold text-white font-inter text-[48px] leading-lh3 tracking-[-2%]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <br />
        </div>
        <button className="w-[Hug 507px] h-[Hug 38px] rounded px-12 pr-20 pb-12 pl-20 gap-8 bg-orange font-bold uppercase text-white font-inter text-[14px] leading-lh3 tracking-[-2%]">
          Get free consultation
        </button>
      </div>
      <div className="w-[Hug 1064px] h-[Hug 414px] top-[857px] left-[188px] gap-[108px] ">
        <img className="w-[414px] h-[414px] " src={img2} alt="img2" />
        <div className="w-[Fixed 542px] h-[Hug 187px] gap-[20px]">
          <h3 className=" w-[507px] h-[33px] font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">
            Web & Mobile App Development
          </h3>
          <p className=" w-[542px] h-[76px]font-normal font-inter text-[16px] leading-lh5 text-black">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="w-[Hug 129px] h-[Hug 38px] w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%] ">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img className ="w-[414px] h-[416px] "src={img1} alt="img1" />
        <div className="w-[Fixed 542px] h-[Hug 187px] gap-[20px]">
        <h3 className="w-[507px] h-[33px] font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">Digital Strategy Consulting</h3>
        <p className="w-[542px] h-[76px]font-normal font-inter text-[16px] leading-lh5 text-black">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className=" w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%]">
          LEARN MORE
        </button>
        </div>
      </div>
      <div>
        <h3>Frequently asked questions</h3>
      </div>
      <div>
        <div>
          <h4>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h4>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
        </h4>
        <h4>
          {" "}
          Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
        </h4>
      </div>
    </div>
  );
}

export default main;
