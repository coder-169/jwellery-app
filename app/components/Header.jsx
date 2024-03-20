"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/footerLogo.png";
import Head from "next/head";

const Header = () => {
  const [isActive, setisActive] = useState(false);
  const navBar = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <header className="h-20 flex justify-between items-center sm:bg-transparent nav px-2 lg:px-[5vw]">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta
            name="description"
            content="Diamond Labs combines crafting, engineering and data technologies to create, design and trade your perfect pieces of jewellery and then, immortalizing them.  
            Legacy, made perfect."
          />
          <meta name="robots" content="max-image-preview:large" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:site_name"
            content="Diamond Labs"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Diamond Labs"
          />
          <meta
            property="og:description"
            content="I am an Experienced Full stack web developer and blogger I create stunning and user-centric online experiences with seamless let&#039;s build your online presence."
          />
          <meta property="og:image:type" content="png" />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:image:width" content="1536" />
          <meta property="og:image:height" content="2048" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@diamondlabs" />
          <meta
            name="twitter:title"
            content="Diamond Labs"
          />
          <meta
            name="twitter:description"
            content="Diamond Labs combines crafting, engineering and data technologies to create, design and trade your perfect pieces of jewellery and then, immortalizing them.  
            Legacy, made perfect."
          />
          <meta name="twitter:creator" content="@diamondlabs" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <div className="">
          <Image alt="" src={Logo} width={250} height={100} />
        </div>
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
      </header>
      <div className="h2 p-8 flex justify-center top-14 sm:top-0 absolute w-full">
        <Image alt="" src={Logo} width={200} height={100} className="mx-auto" />
      </div>
      <button
        onClick={navBar}
        className="btn sm:px-6 sm:py-4 rounded-md border px-3 py-3 sm:gap-4 flex items-center border-white font-semibold z-[99] absolute top-3 right-3"
      >
        <div
          className={`flex flex-col ${isActive ? "gap-0" : "gap-1"
            } items-center justify-center`}
        >
          <div
            className={`w-6 h-1 rounded-full transition-all duration-300 bg-white ${isActive ? "rotate-45" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-1 rounded-full transition-all duration-300 bg-white ${isActive ? "-rotate-45" : ""
              }`}
          ></div>
        </div>
        {/* Menu */}
      </button>
      <div
        className={`nav2 h-full w-full absolute ${isActive ? "left-0" : "-left-full"
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
