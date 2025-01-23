"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lg:wrappe h-[38px] bg-[#000000] flex justify-center items-center">
        <h1 className="text-white text-sm text-center">
          Sign up and get 20% off your first order.{" "}
          <Link href="#">
            Sign Up Now
          </Link>
        </h1>
      </div>
      <div className="lg:ml-14 lg:w-[1240px] h-[96px] flex items-center justify-between px-4 lg:px-14 shadow-lg relative">
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-center lg:text-left">
          SHOP.CO
        </h1>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row  lg:relative bg-white lg:bg-transparent top-0 left-0 h-auto lg:h-auto w-4/5 lg:w-auto shadow-lg lg:shadow-none z-50 p-4 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center text-center">
            <Link href={"/product"}>
              <li className="mt-2 lg:mt-0">Shop</li>
            </Link>
            <Link href={"/onsale"}>
              <li className="mt-2 lg:mt-0">On Sale</li>
            </Link>
            <Link href={"/Hero2"}>
              <li className="mt-2 lg:mt-0">New Arrival</li>
            </Link>
            <Link href={"/"}>
              <li className="mt-2 lg:mt-0">Home</li>
            </Link>
            <li className="flex items-center lg:w-[577px] bg-[#F0F0F0] rounded-[62px] gap-2 px-4 py-2">
              <Image src={"/search.png"} width={12} height={12} alt="Search" />
              <span className="text-sm">Search for product</span>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3 items-center justify-center">
          <Link href={"/onsale"}>
            <Image
              src={"/search.png"}
              width={12}
              height={12}
              alt="Search"
              className="lg:hidden"
            />
          </Link>
          <Link href={"/cart"}>
            <Image src={"/cart.png"} width={24} height={24} alt="Cart" />
          </Link>
          <Image src={"/contact.png"} width={20} height={20} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
