import Image from "next/image";
import React from "react";
import BlogAnimation from "../blogAnimation/BlogAnimation";

const Trending = () => {
  const trendingData = [
    {
      id: 1,
      name: "project",
      image: "/images/post-ai20.jpg",
      title: "Bioinformatics and AI: New Healthcare Rese...",
    },
    {
      id: 2,
      name: "project",
      image: "/images/post-ai21.jpg",
      title: "AI-powered Creativity: How Machines are Be...",
    },
    {
      id: 3,
      name: "project",
      image: "/images/post-ai22.jpg",
      title: "The Intersection of Cognitive Psychology a...",
    },
  ];
  return (
    <div className="bg-gray-50 ">
      <div className="w-[1200px] mx-auto grid grid-cols-3 h-72 justify-items-center place-items-center gap-x-4 relative">
        {trendingData?.map((trending) => (
          <div
            key={trending?.id}
            className="flex gap-x-4 items-center group z-10"
          >
            <div className="w-3/6 overflow-hidden cursor-pointer">
              <Image
                src={trending?.image}
                alt="loading"
                width={123}
                height={123}
                className="w-full h-full transition-transform duration-1000  ease-in-out group-hover:scale-110  object-cover"
              />
            </div>
            <div>
              <h4 className="hover:text-[#E93314]  cursor-pointer duration-300 text-xs opacity-70  font-semibold uppercase">
                {trending?.name}
              </h4>
              <h4 className="text-xl font-medium cursor-pointer mt-2">
                {trending?.title}
              </h4>
            </div>
          </div>
        ))}

        <div className="absolute">
          <h1 className="uppercase text-[15rem] text-white  tracking-[50px]">
            trending
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Trending;
