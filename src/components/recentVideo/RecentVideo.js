"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsTriangleFill } from "react-icons/bs";
import BlogAnimation from "../blogAnimation/BlogAnimation";
import AnimateButton from "../animateButton/AnimateButton";
import Link from "next/link";

const RecentVideo = () => {
  const [currentVideo, setCurrentVideo] = useState({
    title: "Robots in Everyday Life: Exploring the Impact of AI",
    trend: "Ai Video",
    name: "Sandra Jones",
    date: "01 Jan 2020",
    id: 1,
    thumbnail: "/images/video-ai1.jpg",
  });
  const recentVideoData = [
    {
      id: 1,
      thumbnail: "/images/video-ai1.jpg",
      title: "Robots in Everyday Life: Exploring the Impact of AI",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "https://www.youtube.com/watch?v=Et7TTfwvBFo",
    },
    {
      id: 2,
      thumbnail: "/images/video-ai2.jpg",
      title: "Brain-Computer Interfaces: Merging Neuroscience & Technology",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "",
    },
    {
      id: 3,
      thumbnail: "/images/video-ai3.jpg",
      title: "AI in Education: Transforming Learning in the Digital Age",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "",
    },
    {
      id: 4,
      thumbnail: "/images/video-ai4.jpg",
      title: "Exploring Brain-Computer Interface Technologies",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "",
    },
  ];

  const handleVideoClick = (item) => {
    setCurrentVideo(item);
  };
  return (
    <div className="bg-[#121418] py-24 ">
      <div className="w-[1200px] mx-auto">
        <div className="flex items-center gap-x-6  ">
          <h1 className="text-3xl font-semibold text-white">Recent Video</h1>
          <h4 className="text-lg text-gray-500 ">Stay up-to-date</h4>
          <div className="w-7/12 border-y border-gray-500 opacity-60 pb-0.5 "></div>
          <button className="text-white flex items-center border-none outline-none gap-5 hover:text-[#EB472B] duration-300">
            <p className=" font-medium">More Posts</p>
            <div className=" border-gray-500 border size-[22px] rounded-full flex justify-center items-center  ">
              <GoArrowRight />
            </div>
          </button>
        </div>
        <div className="cursor-pointer  mt-8">
          <div className=" group overflow-hidden relative z-10">
            <Image
              className="h-[650px] object-cover w-full transition-transform duration-1000  ease-in-out group-hover:scale-110"
              src={currentVideo?.thumbnail}
              alt="loading...?"
              width={1200}
              height={800}
            />
            <div className="absolute top-0 inset-0 bg-black/40 ">
              <Link href={currentVideo?.videoURL || {}} className="flex justify-center flex-col items-center h-[650px]">
                <div
                  className="bg-white hover:bg-[#E93314] duration-300 hover:scale-125 hover:text-white 
               size-20 flex items-center justify-center rounded-full object-cover"
                >
                  <BsTriangleFill className="rotate-90" />
                </div>
                <div className="mt-6  text-center">
                  <AnimateButton animateButton={currentVideo?.trend} />
                  <div className="text-white mt-4">
                    <BlogAnimation
                      title={currentVideo?.title}
                      des={currentVideo?.name}
                      date={currentVideo?.date}
                      comment={currentVideo?.comment}
                      space={`flex justify-center flex-col items-center`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex ">
            {recentVideoData?.map((videoContent) => (
              <div
                key={videoContent?.id}
                className={` -mt-10  ${currentVideo.id === videoContent.id ? "z-20" : "z-0"
                  }`}
              >
                <div
                  onClick={() => handleVideoClick(videoContent)}
                  className="relative group overflow-hidden "
                >
                  <Image
                    src={videoContent?.thumbnail}
                    alt="loading...?"
                    width={318}
                    height={250}
                    className={` h-52 object-cover ${currentVideo.id === videoContent.id
                        ? "transition-transform duration-1000  ease-in-out group-hover:scale-110"
                        : " "
                      }`}
                  />
                  <div
                    className={`absolute top-0 inset-0  w-full px-6 ${currentVideo.id === videoContent.id
                        ? "bg-black/50 "
                        : "bg-[#121418] "
                      }`}
                  >
                    <div className="absolute bottom-8 ">
                      <div
                        className={`size-6   ${currentVideo.id === videoContent.id
                            ? "border-white border-2"
                            : "border-gray-500"
                          } border rounded-full flex items-center justify-center`}
                      >
                        <BsTriangleFill className="rotate-90 text-[10px] text-white " />
                      </div>
                      <h2 className="text-xl text-white font-medium cursor-pointer pt-4">
                        {videoContent?.title.slice(0, 35)}..
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentVideo;
