import React from "react";
import Header from "../pages/header";
import "../index.css";
import hero from "../assets/Hero Image.png";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";

function main() {
  return (
    <div className="custom-2xl  sm:h-[3343px] sm:left-[4803px]">
      <Header />
      <img className="2xl:w-[1440px] 2xl:h-[700px] 2xl:top-[77px]"
        src={hero}
        alt="heroimg"
      />
      <div className=" 2xl:w-[Fixed 630px]  2xl:top-[440px] 2xl:left-[78px]  2xl:pt-[24px] 2xl:pr-[40px] absolute 2xl:pb-[70px] 2xl:pl-[40px] 2xl:gap-20px sm:h-[294px] sm:top-[295px] sm:p-[24px_20px_32px_20px] sm:gap-[20px]  bg-gradient-to-r from-green to-blue">
        <p className="w-[556px] h-[192px] sm:w-[335px] sm:h-[180px] sm:gap-0 font-bold text-white  capitalize font-inter  text-[46px] leading-lh3 tracking-[-2%]">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>

        <button className="">
        </button>
      </div>
      
      {/*web & mobile app dev*/}
      
      <div className="flex  justify-center w-[Hug 1064px] h-[Hug 414px] top-[857px] left-[188px] gap-[108px] ">
        <img className="sm:w-[335px] sm:h-[572.82px] sm:top-[649px] sm:left-[20px] sm:gap-[20px]  2xl:w-[414px] 2xl:h-[414px] " src={img2} alt="img2" />
          <div className=" mt-36 2xl:w-[Hug 542px] 2xl:h-[Hug 187px] 2xl:gap-20">
          <h3 className="2xl:w-[507px] 2xl:h-[33px] 2xl:gap-12 font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">
            Web & Mobile App Development
          </h3><br/>
        <p className="2xl:w-[542px] 2xl:h-[76px] font-normal font-inter text-[16px] leading-lh5 text-black">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <br />
          <button className="w-[Hug 129px] h-[Hug 38px] w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%] ">
            Learn More
          </button>
          </div>  
      </div>

      {/*digital stratergy*/}
      
      <div className="flex w-[Hug 1064px] h-[Hug 414px] gap-[20px] ">
    
        <div className="m-32">
          <h3 className="w-[507px] h-[33px] font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">
            Digital Strategy Consulting
          </h3>
          <br />
          <p className="w-[542px] h-[76px]font-normal font-inter text-[16px] leading-lh5 text-black">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <br />
          <button className=" w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%]">
            LEARN MORE
          </button>
        </div>
        
        <img
          className=" w-[414px] h-[416px] sm:w-[275px] sm:h-[275.82px] "
          src={img1}
          alt="img1"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="w-[389px] h-[70px] font-poppins font-semibold  text-primaryPurple text-[26px] leading-lh4 tracking-[0.4px] ">
          Frequently asked questions
        </h3>
      </div>
      <div className=" flex items-center justify-center w-[hug 846px] h-[hug 331px] top-[1847px] left -[297px] gap-[15px]">
        <div className="w-[fixed 846px] h-[hug 149px] rounded-[7px] gap-13p-24px bg-whitepup">
          <div className="w-[fill 798px] h-[hug 28px] gap-[40px] ">
            <h4 className="font-medium font-inter text-primaryPurple text-[22px] leading-lh6">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero? </h4>
              <div className="flex justify-end rounded bg-primaryPurple">
              <hr className=" flex justify-normal  w-[14px]  gap-[10px] bg-primaryPurple" />
                </div>
          </div>
          <div>
            <p className="w-[798px] h-[60px] font-inter  text-darkp front-normal text-[18px] leading-lh7">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
          <div className="w-[fixed 846px] h-[hug 76px] rounded-[7px] gap-[13px] p-[24px] bg-whitepup">
            <div className="w-[fill 798px] h-[hug 28px] gap-[40px]">
              <h4 className="w-[fill 744px] h-[hug 28px] font-inter font-medium text-[22px] gap-[40px0] leading-lh6 text-black">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                integer?
              </h4>
            </div>
          </div>
          <div className="w-[fixed 846px] h-[hug 76px] rounded-[7px] gap-[13px] p-[24px] bg-whitepup">
            <div className="w-[fill 798px] h-[hug 28px] gap-[40px]">
              <h4 className="w-[fill 744px] h-[hug 28px] font-inter font-medium text-[22px] gap-[40px0] leading-lh6 text-black">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                nunc?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
