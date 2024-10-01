import Image from "next/image";
import { recentTrendData } from "../data/RecentTrendData";
import BlogAnimation from "../blogAnimation/BlogAnimation";
import AnimateButton from "../animateButton/AnimateButton";

const RecentPosts = () => {
  const recentData = [
    {
      id: 1,
      title: "Are We Ready for Breakthroughs in AI?",
    },
    {
      id: 2,
      title: "Automated Emotion Recognition: The Algorithm",
    },
    {
      id: 3,
      title: "How Machines are Reshaping the News Industry",
    },
    {
      id: 4,
      title: "The Neuroethics of Brain-Computer Interfaces",
    },
    {
      id: 5,
      title: "Neuroplasticity and AI: Enhancing Brain Function",
    },
  ];

  return (
    <div className="my-16 grid grid-cols-3">
      <div className="col-span-2">
        <div className="flex items-center ">
          <h1 className="text-3xl font-semibold">Recent Posts</h1>
          <h4 className="text-base text-gray-500 mx-5">Stay up-to-date</h4>
          <div className="w-6/12 border-y pb-0.5"></div>
          <div className="w-14 border-y pb-0.5 border-gray-700 ml-5"></div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {recentData?.map((recent) => (
            <div key={recent?.id}>
              <div className="flex items-center gap-x-3 ">
                <h5 className="text-[#EB472B] text-lg font-medium">
                  {recent?.id}.
                </h5>
                <h1 className="hover:text-[#EB472B] duration-300 text-lg font-semibold cursor-pointer">
                  {recent?.title}
                </h1>
              </div>
              <div className="w-full border-b pb-3"> </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-12">
          {recentTrendData[0]?.recentData?.map((recentTrend, idx) => (
            <div
              key={recentData?.id}
              className={` group relative cursor-pointer  ${
                idx === 0 ? "col-span-2 row-span-2" : " col-span-1 row-span-1"
              }`}
            >
              <div className="overflow-hidden  ">
                <Image
                  src={recentTrend?.image}
                  alt="loading...?"
                  width={849}
                  height={316}
                  className="h-full w-full transition-transform duration-1000  ease-in-out group-hover:scale-110  object-fill "
                />
              </div>
              <div className="absolute inset-0 bg-black/50 text-white px-5">
                <div className="absolute bottom-7 ">
                  <div className="text-center">
                 <div className="mb-2">
                 {recentTrend?.trend && <AnimateButton animateButton={recentTrend.trend}/>}
                 </div>
                    { 
                        <BlogAnimation 
                      space={`flex flex-col items-center justify-center text-center space-y-3`}
                      title={recentTrend?.title}
                      textSize={` text-center`}
                   />}
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

export default RecentPosts;
