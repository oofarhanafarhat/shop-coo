"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import  CustomerReviews from "@/component/Review"

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white">
      <div className="w-full lg:w-4/5 mx-auto h-[100px] px-4 flex items-center">
        <nav className="text-sm text-gray-500 overflow-hidden whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/shop" className="text-gray-500 hover:text-black">
            Shop
          </Link>{" "}
          &gt;{" "}
          <span className="text-black font-semibold">T-shirts</span>
        </nav>
      </div>
      <div className="lg:flex justify-evenly lg:gap-16 px-4 py-6 flex-col lg:flex-row">
        
        <div className="flex lg:flex-col gap-4 justify-center md-mb-3">
          {["/p1.png", "/h1.png", "/p1.png", "/p3.png"].map((src, index) => (
            <Image
              key={index}
              src={src}
              width={150}
              height={167}
              alt={`Thumbnail ${index + 1}`}
              className="w-[150px] h-[167px] sm:w-16 sm:h-16 object-cover border bg-[#FFF9E5] rounded-xl my-3 "
            />
          ))}
        </div>

        
        <div className="bg-[#F0EEED] w-full lg:w-[444px] h-auto rounded flex justify-center items-center">
          <Image
            src="/p1.png"
            width={300}
            height={250}
            alt="T-shirt"
            className="w-full lg:w-80 object-contain"
          />
        </div>
        <div className="justify-center items-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-black mb-4 text-center">
            One Life Graphic T-shirt
          </h1>
          <p className="text-yellow-500 text-sm text-center">★★★★★</p>
          <p className="text-lg md:text-xl text-gray-600 mt-2 text-center">
            $260 <span className="line-through text-gray-400 text-center">$300</span>
          </p>
          <p className="text-gray-500 text-sm mt-4 w-full lg:w-[400px] text-center">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="mt-6">
            <h3 className="text-md font-semibold text-gray-500 text-center sm:text-center lg:text-start">Select Colors</h3>
            <div className="flex flex-wrap gap-3 mt-2 text-center sm:text-center lg:text-start">
              {["#816DFA", "#000000", "#CDBA7B"].map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border text-center sm:text-center lg:text-start"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-md font-semibold text-gray-500 text-center sm:text-center lg:text-start">Choose Size</h3>
            <div className="flex flex-wrap gap-3 mt-2 ">
              {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-full ${
                    index === 2
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-gray-200 flex items-center justify-center text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 bg-gray-200 flex items-center justify-center text-lg font-bold"
              >
                +
              </button>
            </div>
          <Link href={"/cart"} >  <button className="mt-4 md:mt-0 px-6 py-3 bg-black text-white rounded-full w-full md:w-[250px] hover:bg-gray-800">
              Add To Cart
            </button></Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex  justify-around items-center space-x-10 border-b">
          <button className="pb-2  text-gray-600 shadow-lg ">
            Product Details
          </button>
          <button className="pb-2 font-bold text-[#000000] border-b-2 border-black shadow-lg">Rating & Reviews</button>
          <button className="pb-2 text-gray-600 shadow-lg">FAQs</button>
        </div>
        <div className="mt-4">
          <p className="text-lg text-[#000000] ml-6 font-bold">All Reviews (451)</p>
        </div>
         <CustomerReviews/>
      </div>

       <div className=" w-screen lg:w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24 mt-10">
          
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-10">
              You might also like
              </h1>
            </div>
      
            
            <div className="flex flex-wrap lg:flex  justify-center gap-4 md:gap-6 lg:gap-8 mb-10">
              {[
                { src: "/p01.png", title: "Polo with Contrast Trims", price: "$120", rating: "4.5/5" },
                { src: "/p02.png", title: "Gradient Graphic T-shirt", price: "$240", rating: "3.3/5", discount: "-20%", originalPrice: "$260" },
                { src: "/p03.png", title: "Polo with Tipping Details", price: "$180", rating: "4.5/5" },
                { src: "/p04.png", title: "Black Striped T-shirt", price: "$130", rating: "4.5/5", discount: "-30%", originalPrice: "$160" },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="w-40 sm:w-52 lg:w-72 flex flex-col  justify-center items-center space-y-2"
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
                          className={`w-4 h-4 lg:w-6 lg:h-6 ${starIdx < 4 ? "text-[#FFC633]" : "text-gray-400"}`}
                        />
                      ))}
                    <span className="text-sm lg:text-xl text-gray-500 pl-2 text-center">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <span className="text-lg lg:text-2xl font-bold text-black text-center">
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
</div>
    </div>
  );
};

export default Product;

