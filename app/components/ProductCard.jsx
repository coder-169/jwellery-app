import Image from "next/image";
import React from "react";

const ProductCard = ({ price, img, category, name }) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg lg:h-96 bg-zinc-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          height={500}
          width={500}
          className="w-full h-full object-contain"
          alt="Picture of the author"
        />
      </div>
      <h2 className="text-xl font-medium tracking-tighter title-font mt-5">
        {name}
      </h2>
      <div className="flex items-center mt-2 gap-4">
        <p className="text-base leading-relaxed">{category}</p> -
        <h3 className="font-medium">${price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
