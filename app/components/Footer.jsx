import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-screen w-full px-6 pt-10">
      <div className="bg-gray-100 w-full h-full overflow-hidden relative rounded-tr-3xl rounded-tl-3xl">
        <div className="w-full h-full flex py-20 px-16 lg:p-20 sm:py-20 sm:px-16 gap-5 sm:gap-16 lg:gap-32 flex-col sm:flex-row lg:flex-row">
          <div className="text-sm flex flex-col gap-4 uppercase font-semibold">
            <Link href="">Privacy</Link>
            <Link href="">Terms of Service</Link>
            <Link href="">HELP CENTER</Link>
          </div>
          <div className="flex text-sm flex-col gap-4 uppercase font-semibold">
            <Link href="">CONTACT US</Link>
            <Link href="">HELLO@DIAMONDLABS.IO</Link>
            <Link href="">TWITTER</Link>
          </div>
        </div>
        <div className="w-full absolute bottom-6">
          <h2 className="text-right pr-8">&copy;{new Date().getFullYear()}</h2>
          <h1 className="uppercase leading-none text-[10vw] text-center w-full">
            Diamond Labs
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
