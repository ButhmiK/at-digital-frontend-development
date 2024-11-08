import React, {useState} from "react";
import Header from "../pages/header";
import "../index.css";
import hero from "../assets/Hero Image.png";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";
import Footer from "./footer";

function main() {
  return (
    <div>
      <div className="custom_2xl_custom_xl-custom_md-custom_sm">
        <Header />
        <img
          className="2xl:w-[1440px] 2xl:h-[700px] xl:w-[1200px] xl:h-[700px] md:w-[768px] md:h-[448px] "
          src={hero}
          alt="heroimg"
        />
        <div className="2xl:absolute xl:absolute 2xl:w-[fixed 630px] 2xl:h-[hug 306px] 2xl:top-[440px] 2xl:left-[80px]  2xl:p-[24px_40px_32px_40px]  2xl:gap-20 xl:w-[fixed 622px] xl:h-[hug 306px] xl:top-[454px] xl:left-[60px] xl:p-[24px_40px_32px_40px] xl:gap-[20px] md:w-[fixed 768px] md:h-[hug 258px]   md:p-[24px_40px_32px_40px] md:gap-[20px] sm:w-[fixed 375px] sm:h-[hug 294px] sm:top-[295px] sm:p-[24px_20px_32px_20px] sm:gap-[20px]  bg-gradient-to-r from-green to-blue">
          <p className="2xl:w-[556px] 2xl:h-[205px] xl:w-[556px] xl:h-[205px] md:w-[688px] md:h-[185px]  sm:w-[335px] sm:h-[180px]  font-bold text-white  capitalize font-inter  text-[46px] leading-lh3 tracking-[-2%]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <button className="2xl:w-[214px] 2xl:h-[38px] 2xl:p-[12px_20px] 2xl:gap-[8px]  xl:w-[214px] xl:h-[38px] xl:p-[12px_20px] xl:gap-[8px] md:w-[hug 214px] md:h-[hug 38px] md:p-[12px_20px] md:gap-[8px]  rounded bg-orange ">
            <p className="w-[174px] h-[14px] font-inter text-[14px] font-bold leading-[14px] tracking-[-2%] text-white ">
              Get free consultation
            </p>
          </button>
        </div>

        {/*web & mobile app dev*/}

        <div className="2xl:mb-36 2xl:flex xl:flex md:flex justify-center w-[Hug 1064px] h-[Hug 414px] top-[857px] left-[188px] gap-[108px]  xl:w-[fixed 896px] xl:h-[hug 346px] xl:top-[857px] xl:left-[188px] xl:gap-[108px] md:w-[fixed 688px] md:h-[hug 275px] md:top-[843px] md:left-[40px] md:gap-[20px] sm:w-[fixed 335px] sm:h-[hug 572.82px] sm:top-[649px] sm:left-[20px] sm:gap-[20px] ">
          <img
            className="sm:w-[275x] sm:h-[275.82px] sm:top-[649px] sm:left-[20px] sm:gap-[20px]  2xl:w-[414px] 2xl:h-[414px] xl:w-[346px] xl:h-[346px] md:w-[275px] md:h-[275px]"
            src={img2}
            alt="img2"
          />
          <div className=" 2xl:mt-36 md:mt-20 2xl:w-[Hug 542px] 2xl:h-[hug 187px] xl:my-24 xl:w-[Hug 530px] xl:h-[hug 187px] md:w-[fill 393px] md:h-[hug 239px] sm:w-[fill 335px] sm:h-[hug 277px] gap-20 ">
            <h3 className="2xl:w-[507px] 2xl:h-[33px] 2xl:gap-12 md:w-[393px] md:h-[66px] xl:w-[507px] xl:h-[hug 33px] xl-gap-[12px] sm:w-[335px] sm:h-[66px] sm:text-center font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">
              Web & Mobile App Development
            </h3>
            <br />
            <p className="2xl:w-[542px] 2xl:h-[76px] md:w-[393px] md:h-[95px] xl:w-[530px] xl:h-[76px] sm:w-[335px] sm:h-[133px] sm:text-center font-normal font-inter text-[16px] leading-lh5 text-black">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <br />
            <button className="w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%] ">
              Learn More
            </button>
          </div>
        </div>

        {/*digital stratergy*/}

        <div className="2xl:flex 2xl:items-center 2xl:justify-center xl:flex xl:items-center xl:justify-center md:flex md:items-center md:justify-center 2xl:w-[hug 1064px] 2xl:h-[hug 416px] 2xl:top-[1351px] 2xl:left-[188px] 2xl:gap-[108px] xl:w-[fixed 896px] xl:h-[hug 348px] xl:top-[1283px] xl:left-[152px] xl:gap-[20px] md:w-[fixed 688px] md:h-[fixed 276px] md:top-[1178px] md:left-[40px] md:gap-[20px] md:mt-24 w-[Hug 1064px] h-[Hug 414px] gap-[20px] 2xl:pb-8">
          
          <div className="2xl:w-[fixed 542px] 2xl:h-[hug 206px] 2xl:gap-20 xl:w-[fill 530px] xl:h-[hug 206px] xl:gap-20 md:w-[fill 393px] md:h-[hug 225px] md:gap-20">
          <img
            className="2xl:hidden xl:hidden md:hidden sm:h-[275px]  sm:276px "
            src={img1}
            alt="img1"
          />
            <h3 className="2xl:w-[507px] 2xl:h-[33px] xl:w-[fill 530px] xl:h-[hug 33px] md:w-[393px] md:h-[33px] sm:text-center font-semibold text-primaryPurple font-poppins leading-lh4 text-[27px] tracking-[0.4px]">
              Digital Strategy Consulting
            </h3>
            <br />
            <p className="2xl:w-[542px] 2xl:h-[95px] xl:w-[530px] xl:h-[95px] md:w-[393px] md:h-[114px] sm:text-center font-normal font-inter text-[16px] leading-lh5 text-black">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <br />
            <button className="w-[Hug 129px] h-[Hug 38px] rounded gap-8 p-12 pr-20 pb-12 pl-20 uppercase bg-orange text-white  font-inter font-bold text-[14px] leading-[14px] tracking-[-2%]">
              LEARN MORE
            </button>
          </div>
          <img
            className="2xl:w-[414px] 2xl:h-[416px] sm:hidden "
            src={img1}
            alt="img1"
          />
        </div>

        {/* faq */}
        <div className="flex 2xl:flex-col 2xl:items-center 2xl:justify-center xl:flex-col xl:items-center xl:justify-center mb-32 xl:mt-20 2xl:w-[hug 846px] 2xl:h-[hug 392px] 2xl:top-[1847px] 2xl:left[297px] 2xl:gap-28 xl:w-[fixed 896px] xl:h-[hug 392px] xl:top-[1711px] xl:left[152px] xl:gap-28 md:w-[fixed 686px] md:h-[hug 506px] md:top-[1514px] md:left-[42px] md:gap-[28px] md:flex-col md:items-center md:justify-center md:mt-24 sm:w-[fixed 334px] sm:max-h-[hug 769px] sm:top-[1915px] sm:left-[20px] sm:gap-[28px] sm:flex-col sm:items-center sm:justify-center ">
          <h3 className="w-[389px] h-[33px] sm:w-[334px] sm:h-[66px]  font-poppins font-semibold  text-primaryPurple text-[26px] leading-lh4 tracking-[0.4px] sm:text-center">
            Frequently asked questions
          </h3>

          <div className="justify-center items-center 2xl:w-[hug 846px] 2xl:h-[hug 331px] gap-[15px] xl:w-[fill 896px] xl:h-[hug 331px] md:w-[fill 686px] md:h-[hug 445px] sm:w-[fill 334px] sm:h-[hug 675px] sm:gap-[15px]">
            {/* purple box 1 */}
            <div className="2xl:w-[fixed 846px] 2xl:h-[hug 149px] 2xl:gap-13px  xl:w-[fill 896px] xl:h-[hug 149px] xl:gap-[13px] rounded-[7px] p-[24px] bg-whitepup md:w-[686px] md:h-[207px] md:pt-[24px] md:gap-[13px] md:rounded-tl-[7px] sm:w-[fill 334px] sm:h-[hug 325px] sm:p-[24px] sm:gap-[13px] sm:rounded-[7px] ">
              <div className="2xl:w-[fill 798px] 2xl:h-[hug 28px] 2xl:gap-[40px] md:w-[fill 638px] md:h-[hug 56px] md:gap-40px sm:[fill 286px] sm:[hug 84px] sm:gap-40">
                <h4 className="2xl:w-[744px] 2xl:h-[28px] xl:w-794px] xl:h-[28px] md:w-[584px] md:h-[56px] sm:w-[235px] sm:h-[84px] xl:w-794px] font-medium font-inter text-primaryPurple text-[22px] leading-lh6">
                  Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </h4>
                {/* hr tag */}
                <div className="2xl:w-[hug 14px] 2xl:h-[fill 28px] 2xl:pt-[12px] 2xl:pb[7px] 2xl:gap-[10px]">
                  <hr className="2xl:w-[14px] 2xl:top-[12px] border-2  bg-black" />
                </div>
              </div>

              <p className="2xl:w-[798px] 2xl:h-[60px] xl:w-[848px] xl:h-[60px] font-inter md:w-[638px] md:h-[90px] sm:w-[286px] sm:h-[180px] text-darkp front-normal text-[18px] leading-lh7">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
            <br />
            {/* purple box2 */}
            <div className="2xl:w-[fixed 846px] 2xl:h-[hug 76px] xl:w-[fixed 896px] xl:h-[hug 76px] md:w-[fill 686px] md:h-[hug 104px] rounded-[7px] gap-[13px] p-[24px] sm:w-[fill 334px] sm:max-h-[hug 160px] sm:pt-[24px] sm:gap-[13px] sm:rounded-tl-[7px] bg-whitepup">
              <div className="2xl:w-[fill 798px] 2xl:h-[hug 28px] xl:w-[fill 848px] xl:h-[hug 28px] gap-[40px] md:w-[fill 638px] md:h-[hug 56px] sm:w-[fill 286px] sm:h-[hug 112px]">
                <h4 className="2xl:w-[fill 744px] 2xl:h-[hug 28px] xl:w-[794px] xl:h-[28px] md:w-[584px] md:h-[56px] sm:w-[232px] sm:h-[112px] font-inter font-medium text-[22px] gap-[40px0] leading-lh6 text-black">
                  Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                  integer?
                </h4>
                {/* plusicon */}
              </div>
            </div>
            <br />

            {/* purplrbox3 */}
            <div className="2xl:w-[fixed 846px] 2xl:h-[hug 76px] md:w-[686px] md:h-[104px] sm:w-[fill 334px] sm:h-[hug 160px] sm:pt-[24px] sm:gap-[13px] rounded-[7px] gap-[13px] p-[24px] bg-whitepup">
              <div className="2xl:w-[fill 798px] 2xl:h-[hug 28px] 2xl:gap-[40px] sm:w-[fill 286px] sm:h-[hug 112px] sm:gap-[40px]">
                <h4 className="2xl:w-[fill 744px] 2xl:h-[hug 28px] sm:w-[232px] sm:h-[112px] font-inter font-medium text-[22px]  leading-lh6 text-black">
                  Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                  nunc?
                </h4>
                {/* plusicon */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default main;
