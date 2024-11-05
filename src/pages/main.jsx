import React from "react";
import Header from "../pages/header";
import "../index.css";
import hero from "../assets/Hero Image.png";
import img1 from '../assets/image 1.png';
import img2 from '../assets/image 2.png';

function main() {
  return (
    <div>
      <Header />
      {/* <img className="w-[1400px] h-[700px] sm:w[375px] sm:h-[218px] md:w-[768px] md:h-[448px] xl:w-[1200px] xl:h-[700px] pt:77" src={hero} alt="heroimg" /> */}
         <img className="w-[1520px]" src={hero} alt="heroimg" />
      <div className="w-[fixed 630px] h-[Hug 306px] absolute top-354 left-80 bg-gradient-to-r from-green to-blue">
        <h1 className="text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <button className="w[Hug 214px] h[Hug 38px] rounded border-inherit bg-orange text-white">
          Get free consultation
        </button>
      </div>
      <div>
        <img src={img2} alt="img2"/>
        <h3>Web & Mobile App Development </h3>
        <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
        <button className="w[Hug 214px] h[Hug 38px] rounded border-inherit bg-orange text-white">LEARN MORE</button>
      </div>
      <div>
        <img src={img1} alt="img1"/>
        <h3>Digital Strategy Consulting</h3>
        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
        <button className="w[Hug 214px] h[Hug 38px] rounded border-inherit bg-orange text-white">LEARN MORE</button>
      </div>
      <div>
        <h3>Frequently asked questions</h3>
      </div>
      <div> 
        <div>
          <h4>
          Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </h4>
        </div>
        
        <div>
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
        </div>
        <h4>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h4>
        <h4> Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</h4> 
      </div>
      
    </div>
  );
}

export default main;
