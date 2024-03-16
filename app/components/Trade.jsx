import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImg from "../../public/assets/thirdBgImg.jpeg";

const Page3 = () => {
  return (
    <div className="w-full mt-10 h-screen">
      <section className="body-font h-full">
        <div className="container px-5 py-24 h-full mx-auto flex flex-wrap">
          <div className="lg:w-4/5 mx-auto h-full">
            <div className="flex flex-wrap overflow-hidden bg-zinc-100 rounded-2xl w-full py-32 items-center justify-center px-10 h-full relative mb-4">
              <Image
                alt="gallery"
                width={1000}
                height={100}
                className="w-full h-full absolute object-contain -top-36"
                src={bgImg}
              />
              <div className="text-center mt-10 relative z-10 w-full">
                <h2 className="text-4xl font-medium title-font  tracking-tight mb-2">
                  A new way to trade
                </h2>

                <p className="lg:w-1/2 w-3/4 mx-auto  leading-5 ">
                  Diamond Laboratories offers a brand new way to trade your
                  precious gemstones, the Peer-To-Peer way.
                </p>
                <Link
                  href="https://diamondlabs.io/igo"
                  className="mt-12 inline-block border  border-gray-400 px-5 py-3 rounded-md"
                >
                  TRADE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page3;
