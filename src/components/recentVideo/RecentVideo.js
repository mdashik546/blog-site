"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsTriangleFill } from "react-icons/bs";
import BlogAnimation from "../blogAnimation/BlogAnimation";
import AnimateButton from "../animateButton/AnimateButton";

const RecentVideo = () => {
  const [currentVideo, setCurrentVideo] = useState({
    title: "Robots in Everyday Life: Exploring the Impact of AI",
    id: 1,
    trend: "Ai Video",
    name: "Sandra Jones",
    date: "01 Jan 2020",
    thumbnail: "/images/video-ai1.jpg",
    isPlaying: false,
    videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
      videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      thumbnail: "/images/video-ai2.jpg",
      title: "Brain-Computer Interfaces: Merging Neuroscience & Technology",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ,
    },
    {
      id: 3,
      thumbnail: "/images/video-ai3.jpg",
      title: "AI in Education: Transforming Learning in the Digital Age",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
    },
    {
      id: 4,
      thumbnail: "/images/video-ai4.jpg",
      title: "Exploring Brain-Computer Interface Technologies",
      trend: "Ai Video",
      name: "Sandra Jones",
      date: "01 Jan 2020",
      comment: 0,
      videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
  ];
const [animate,setAnimate] =useState(false)
  const handlePlay = () => {
    setCurrentVideo((prev) => ({ ...prev, isPlaying: true }))

  }

  const handleVideoClick = (item) => {
    setAnimate(true)
    setTimeout(()=>{
    setCurrentVideo({ ...item, isPlaying: false });
    setAnimate(false)
   },300)
  };
  return (
    <div className="bg-[#121418] py-24 ">
      <div className="w-[1200px] mx-auto cursor-pointer  ">
        <div className="flex items-center gap-x-6   ">
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
        <div className="mt-10 ">

          {currentVideo?.isPlaying ? 
          (
         <div className=" relative z-20">
             <video className="h-[650px] object-cover w-full " controls autoPlay={true} src={currentVideo?.videoURL}></video>
         </div>
          ) :
           (
              <div onClick={() => handlePlay()} className={`group overflow-hidden relative z-10 transition-opacity duration-200   ${animate ? "opacity-0" : "opacity-100"}`}>
                <Image
                  className="h-[650px] object-cover w-full transition-transform duration-1000  ease-in-out group-hover:scale-110"
                  src={currentVideo?.thumbnail}
                  alt="loading...?"
                  width={1200}
                  height={800}
                />
                <div className="absolute top-0 inset-0 bg-black/40 ">
                  <div className="flex justify-center flex-col items-center h-[650px]">
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
                  </div>
                </div>
              </div>
        )}
        </div>
          <div className="flex ">
            {recentVideoData?.map((videoContent) => (
              <div
                key={videoContent?.id}
                className={` -mt-10  ${currentVideo.id === videoContent.id ? "z-10" : "z-0"
                  }`}
              >
                <div
                  onClick={() => handleVideoClick(videoContent)}
                  className={`relative group overflow-hidden  `}
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
  );
};

export default RecentVideo;
