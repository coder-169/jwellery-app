import Image from "next/image";
import React from "react";

const TeamCard = ({ name, about, img }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 lg:p-8 py-4 w-full px-24">
      <div className="relative sm:h-[40vh] bg-zinc-200 rounded-2xl overflow-hidden">
        <Image
          width={300}
          height={600}
          alt="Sorry Image Can't Load"
          className="w-full h-full object-contain"
          src={img}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium title-font mb-1">{name}</h3>
        <h2 className="title-font text-sm text-zinc-600">{about}</h2>
      </div>
    </div>
  );
};

export default TeamCard;
