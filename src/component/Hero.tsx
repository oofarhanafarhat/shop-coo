import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen md:w-screen sm:mx-0 sm:px-0  lg:w-[1440px] h-screen bg-[#F2F0F1]  justify-center items-center">
      <div className="grid lg:grid-cols-2 items-center gap-10 px-20 lg:w-[1440px]">
        <div className="space-y-6">
          <h1 className="text-[#000000] text-[48px] lg:text-[64px] leading-[1.2] font-extrabold">
            FIND CLOTHES <br /> THAT MATCH YOUR STYLE
          </h1>
          <p className="text-[#9F9F9F] text-[16px] lg:text-[18px] leading-[1.5]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
         <Link href={"/product"}> <button className="w-full  h-[40px] sm:w-[150px] sm:h-[40px] lg:w-[210px] lg:h-[52px] bg-[#000000] rounded-full text-[#F2F0F1] text-[16px] font-medium mt-5">
            Shop Now
          </button></Link>
        </div>

        
        <div className="flex ">
          <div className="top-[431px] pt-56">
            <Image src={"/2star.png"} width={56} height={56} alt="Star" />
            </div>
          <div className="mb-20 sm:mb-20 lg:mb-0 z-10">
            <Image
              src={"/hero.jpeg"}
              width={400}
              height={450}
              alt="Hero Image"
              className="  rounded-lg"
            />
          </div>
          <div className=" right-10 w-[106px] h-[106px] top-[220px] pt-20">
            <Image src={"/1star.png"} width={106} height={106} alt="Star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

