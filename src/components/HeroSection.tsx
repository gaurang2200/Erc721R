import React from "react";
import heroImage from '../images/img1.svg';
import heroBg from '../images/bg1.svg'
import gradientBg from '../images/gradientBg.svg'

const HeroSection = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center mx-4 md:mx-12 lg:mx-20 pb-8 overflow-hidden">
        <img src={heroBg} className="absolute h-full w-full -z-10" />
        <img src={gradientBg} className="absolute h-full w-full -z-10" />
        <img src={heroImage} className="-z-10"/>
        <div className="z-10 text-white flex flex-col items-center">
          <p className="text-6xl text-center font-bold mt-12 mb-4">
            ERC721R
          </p>
          <p className="text-5xl text-center font-bold">
            A new way of launching NFT collections
          </p>
          <p className="text-center my-12">
            ERC271R is a sprint nft launcher contract through which you can launch a refundable NFT
            <br /> collection and also reward the early minters
          </p>
          <button className="getStartedBtn">
            <p className="font-bold">Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
