import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className=" w-screen lg:w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24 mt-10">
      <div className="text-center  mt-20 sm:mt-20 lg:mt-o">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-10">
          NEW ARRIVALS
        </h1>
      </div>

      <div className="flex flex-wrap lg:flex  justify-center gap-4 md:gap-6 lg:gap-8">
        {[
          {
            src: "/h1.png",
            title: "T-Shirt With Tape Details",
            price: "$120",
            rating: "4.5/5",
          },
          {
            src: "/h2.png",
            title: "Skinny Fit Jeans",
            price: "$240",
            rating: "3.3/5",
            discount: "-20%",
            originalPrice: "$260",
          },
          {
            src: "/h3.png",
            title: "Checkered Shirt",
            price: "$180",
            rating: "4.5/5",
          },
          {
            src: "/h4.png",
            title: "Sleeve Striped T-Shirt",
            price: "$130",
            rating: "4.5/5",
            discount: "-30%",
            originalPrice: "$160",
          },
        ].map((product, idx) => (
          <div
            key={idx}
            className="w-40 sm:w-52 lg:w-72 flex flex-col items-center space-y-2"
          >
            <Image
              src={product.src}
              width={295}
              height={295}
              alt={product.title}
              className="w-full h-auto rounded-3xl"
            />
            <h1 className="text-sm lg:text-lg font-semibold text-center">
              {product.title}
            </h1>
            <div className="flex items-center space-x-1">
              {Array(5)
                .fill(0)
                .map((_, starIdx) => (
                  <Image
                    key={starIdx}
                    src="/star.png"
                    width={16}
                    height={16}
                    alt="Star"
                    className={`w-4 h-4 lg:w-6 lg:h-6 ${
                      starIdx < 4 ? "text-[#FFC633]" : "text-gray-400"
                    }`}
                  />
                ))}
              <span className="text-sm lg:text-xl text-gray-500 pl-2">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-lg lg:text-2xl font-bold text-black">
                {product.price}
              </span>
              {product.discount && (
                <>
                  <span className="text-sm lg:text-lg text-gray-400 line-through pl-2">
                    {product.originalPrice}
                  </span>
                  <button className="ml-2 text-xs lg:text-sm text-red-500 bg-red-100 rounded-full px-2 py-1">
                    {product.discount}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/onsale">
          <button className=" w-full sm:w-[150px] lg:w-[250px] px-6 py-3 text-lg lg:text-2xl font-semibold border border-gray-400 rounded-full">
            View All
          </button>
        </Link>
      </div>
      <div className="mt-16">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mb-8">
          TOP SELLING
        </h1>

        <div className="flex  flex-wrap lg:flex justify-center gap-4 md:gap-6 lg:gap-8">
          {[
            {
              src: "/t1.png",
              title: "T-Shirt With Tape Details",
              price: "$120",
              rating: "4.5/5",
            },
            {
              src: "/t2.png",
              title: "Skinny Fit Jeans",
              price: "$240",
              rating: "3.3/5",
              discount: "-20%",
              originalPrice: "$260",
            },
            {
              src: "/t3.png",
              title: "Checkered Shirt",
              price: "$180",
              rating: "4.5/5",
            },
            {
              src: "/t4.png",
              title: "Sleeve Striped T-Shirt",
              price: "$130",
              rating: "4.5/5",
              discount: "-30%",
              originalPrice: "$160",
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="w-40 sm:w-52 lg:w-72 flex flex-col items-center space-y-2"
            >
              <Image
                src={product.src}
                width={295}
                height={295}
                alt={product.title}
                className="w-full h-auto rounded-3xl"
              />
              <h1 className="text-sm lg:text-lg font-semibold text-center">
                {product.title}
              </h1>
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, starIdx) => (
                    <Image
                      key={starIdx}
                      src="/star.png"
                      width={16}
                      height={16}
                      alt="Star"
                      className={`w-4 h-4 lg:w-6 lg:h-6 ${
                        starIdx < 4 ? "text-[#FFC633]" : "text-gray-400"
                      }`}
                    />
                  ))}
                <span className="text-sm lg:text-xl text-gray-500 pl-2">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-lg lg:text-2xl font-bold text-black">
                  {product.price}
                </span>
                {product.discount && (
                  <>
                    <span className="text-sm lg:text-lg text-gray-400 line-through pl-2">
                      {product.originalPrice}
                    </span>
                    <button className="ml-2 text-xs lg:text-sm text-red-500 bg-red-100 rounded-full px-2 py-1">
                      {product.discount}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/onsale">
            <button className=" w-full sm:w-[150px] lg:w-[250px] px-6 py-3 text-lg lg:text-2xl font-semibold border border-gray-400 rounded-full">
              View All
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-screen lg:w-[1239px]  min-h-screen lg:h-[866px] bg-[#F0F0F0]">
        <h1 className="text-[#000000] text-2xl font-bold lg:text-6xl lg:font-extrabold text-center py-10 bg-[#F0F0F0]">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="lg:flex lg:flex-wrap  gap-5 justify-center items-center">
          <div className="bg-[#FFFFFF] flex justify-between   rounded-2xl w-svw h-[160px] sm:h-[250px] lg:w-[407px]  lg:h-[289px] mb-10 lg:mb-0">
            <div className=" lg:w-[125px] sm:h-[250px] lg:h-[289px] py-6 px-3 text-[#000000] font-bold text-4xl">
              <h1 className="text-[#000000] font-bold  py-4 px-3">Casual</h1>
            </div>
            <div className=" w-svw sm:h-[250px] lg:w-[287px] lg:h-[289px]">
              <Image
                src={"/b1.png"}
                width={287}
                height={289}
                alt="Casual Image"
                className=" object-fill sm:[250px]  h-[160px] lg:w-[287px] lg:h-[289px] mt-0 pt-0"
              />
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex   rounded-xl  w-svw sm:h-[250px] h-[160px] lg:w-[650px] lg:h-[289px] mb-10 lg:mb-0 ">
            <div className="lg:w-[125px] lg:h-[289px] py-6 px-3 text-[#000000] font-bold text-4xl  ">
              <h1 className="py-4 px-3"> Formal</h1>
            </div>
            <div className="w-svw lg:w-[500px] h-[289px]">
              <Image
                src={"/b2.png"}
                width={430}
                height={289}
                alt="Formal Image"
                className="object-fill sm:h-[250px] h-[160px] lg:w-[430px] lg:h-[289px]"
              />
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex   rounded-xl  w-svw sm:h-[250px]  h-[160px] lg:w-[650px] lg:h-[289px] mb-10 lg:mb-0 ">
            <div className="lg:w-[125px] lg:h-[289px] py-6 px-3 text-[#000000] font-bold text-4xl  ">
              <h1 className="py-4 px-3"> party</h1>
            </div>
            <div className=" w-svw lg:w-[500px] lg:h-[289px]">
              <Image
                src={"/b3.png"}
                width={430}
                height={289}
                alt="Party Image"
                className="object-fill h-[160px] sm:h-[250px] lg:w-[430px] lg:h-[289px] "
              />
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex justify-center   rounded-2xl w-svw  sm:h-[250px] h-[160px] lg:w-[407px]  lg:h-[289px] mb-10 lg:mb-0 ">
            <div className=" h-[160px] lg:w-[125px] lg:h-[289px] py-6 px-3 text-[#000000] font-bold text-4xl  ">
              <h1 className="text-[#000000] font-bold  py-4 px-3">Gym</h1>
            </div>

            <div className=" w-svw lg:w-[407px] lg:h-[289px]">
              <Image
                src={"/b4.png"}
                width={285}
                height={200}
                alt="Gym Image"
                className="object-fill sm:h-[250px] h-[160px] lg:w-[407px] lg:h-[289px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
