import React from "react";
import first from "../../public/assets/1.png";
import second from "../../public/assets/8.jpg";
import third from "../../public/assets/2.png";
import fourth from "../../public/assets/3.png";
import fifth from "../../public/assets/4.png";
import sixth from "../../public/assets/5.png";
import seventh from "../../public/assets/6.png";
import eighth from "../../public/assets/7.png";
import ninth from "../../public/assets/9.jpg";
import tenth from "../../public/assets/10.jpg";
import TeamCard from "./TeamCard";

const Page4 = () => {
  const teamMembers = [
    {
      name: "Melvin Tan",
      about: "Chairman & Chief Executive Officer",
      avatar: first,
    },
    {
      name: "Alex Tan",
      about: "Deputy Chief Executive Officer & Chief Products Officer",
      avatar: second,
    },
    {
      name: "Japhet Lim",
      about: "Chief Operating Officer",
      avatar: third,
    },
    {
      name: "Eugene Ling",
      about: "Chief Creative Officer",
      avatar: fourth,
    },
    {
      name: "Jason Fong",
      about: "Executive Director, Malaysia",
      avatar: fifth,
    },
    {
      name: "Yong Chin Bing",
      about: "Business Development Lead",
      avatar: sixth,
    },
    {
      name: "Maiko Yamamoto",
      about: "Operations & Technology Lead",
      avatar: seventh,
    },
    {
      name: "Jeanne Lim",
      about: "Business Development & Public Relations Lead",
      avatar: eighth,
    },
    {
      name: "Jannie",
      about: "Admin & Finance Lead",
      avatar: tenth,
    },
    {
      name: "Adrian Tan",
      about: "Product Development Lead",
      avatar: ninth,
    },
  ];
  return (
    <div className="w-full px-4 lg:px-32">
      <h1 className="text-3xl md:text-5xl text-center">
        Featuring the team
      </h1>
      <section className="body-font">
        <div className="container px-5 py- mt-10 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                about={member.about}
                img={member.avatar}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page4;
