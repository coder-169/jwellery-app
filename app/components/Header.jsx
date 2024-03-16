"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isActive, setisActive] = useState(false);
  const navBar = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <div className="h-20 flex justify-between items-center sm:bg-transparent nav px-2 lg:px-[5vw]">
        <h2 className="text-3xl font-semibold">DIAMOND LABS</h2>
        <div className="links flex font-semibold gap-[3vw] lg:text-xl">
          <Link className="text-sm" href="https://thepeak.io/">
            COLLECTION
          </Link>
          
          <Link
            className="text-sm"
            href="https://diamondlabs.io/exchange/trade"
          >
            TRADE
          </Link>
        </div>
        <a
          href="mailto:hello@diamondlabs.io"
          target="_blank"
          className="text-white inline-block  font-medium px-4 py-2 rounded-full border border-white"
        >
          CONTACT
        </a>
      </div>
      <h2 className="h2 text-4xl absolute w-full font-semibold p-8 sm:py-8 sm:px-0 sm:text-center">
        DIAMOND LABS
      </h2>
      <button
        onClick={navBar}
        className="btn px-6 py-4 rounded-full border gap-4 flex items-center border-white font-semibold z-[99] absolute top-2 right-2"
      >
        <div
          className={`flex flex-col ${
            isActive ? "gap-0" : "gap-1"
          } items-center justify-center`}
        >
          <div
            className={`w-8 h-1 rounded-full transition-all duration-300 bg-white ${
              isActive ? "rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 rounded-full transition-all duration-300 bg-white ${
              isActive ? "-rotate-45" : ""
            }`}
          ></div>
        </div>
        {/* Menu */}
      </button>
      <div
        className={`nav2 h-full w-full absolute ${
          isActive ? "left-0" : "-left-full"
        } transition-all duration-500 bg-black/30`}
      >
        <div className="h-full w-2/4 bg-black/70 flex flex-col items-start px-14 py-8">
          <div className="links flex flex-col font-semibold gap-[3vw] lg:text-xl">
            <Link href="https://thepeak.io/">COLLECTION</Link>
            <Link href="https://diamondlabs.io/exchange/trade">TRADE</Link>
            <a
              href="mailto:hello@diamondlabs.io"
              target="_blank"
              className="text-white inline-block mt-12 font-bold"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
