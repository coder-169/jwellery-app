"use client";
import React from "react";
import Header from "./Header";
import Link from "next/link";
import BgImg from "../../public/assets/bgImg.jpeg";
import Image from "next/image";

const Page1 = () => {
  return (
    <div className="w-full h-screen lg:px-10 sm:px-10 px-5 pb-10 relative text-white">
      <div className="main w-full h-full bg-blak/30 relative rounded-bl-3xl overflow-hidden rounded-br-3xl">
        <Image
          width={1000}
          height={100}
          src={BgImg}
          className="absolute w-full h-full -z-50"
          alt=""
        />

        <Header />
        <div className="mt-40 lg:mt-24 sm: flex flex-col items-center">
          <h1 className="text-center font-sm text-5xl lg:text-7xl font-semibold">
            Where Elegance meets <br /> Technology.
          </h1>
          <p className="w-[80vw] sm:[70vw] md:w-[40vw]  text-sm text-center mt-4 ">
          Diamond Labs combines crafting, engineering and data technologies to create, design your perfect piece of jewellery and then, immortalize it.
            <br /> Legacy, made perfect.
          </p>
          <Link
            href="http://diamondlabs.io/igo"
            className="bg-white lg:px-6 lg:py-4 sm:px-4 sm:py-3 px-3 py-2 rounded-md mt-4 text-black font-normal"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
