import React from "react";
import img from "../../public/assets/diamond.png";
import Image from "next/image";

const Page5 = () => {
  return (
    <div className="w-full mt-10 h-screen">
      <section className="body-font h-full">
        <div className="container px-5 py-24 h-full mx-auto flex flex-wrap">
          <div className="lg:w-4/5 mx-auto h-full relative">
            <Image
              alt=""
              width={500}
              height={500}
              src={img}
              className="absolute left-1/2 -translate-x-1/2"
            />
            <div className="flex flex-wrap w-full py-32 mt-32 items-center justify-center lg:px-10 h-full relative mb-4">
              <div className="text-center relative z-10 w-full">
                <p className="text-3xl lg:w-3/5 font-medium tracking-tighter px-5 lg:p-0 sm:p-0 mx-auto">
                  Customize and craft your jewellery from scratch, with each
                  moment immortalized and captured on-chain.
                </p>
                <h2 className="text-xl font-normal title-font mt-10">
                  Coming soon
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page5;
