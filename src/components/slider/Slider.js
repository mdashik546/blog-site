"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimateButton from "../animateButton/AnimateButton";
import BlogAnimation from "../blogAnimation/BlogAnimation";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      image: "/images/slider-ai1.jpg",
      des: "A thrilling journey through the unknown.",
      name: " Adventure Lover",
      comments: "0",
      month: "01 JAN 2020",
      link: "Science"
    },
    {
      id: 2,
      image: "/images/slider-ai2.jpg",
      des: "A gripping tale of suspense and intrigue.",
      name: " Mystery Buff",
      comments: "1",
      month: "01 JAN 2020",
      link: "Science"
    },
    {
      id: 3,
      image: "/images/slider-ai3.jpg",
      des: "An epic sci-fi adventure beyond the galaxy.",
      name: " Sci-Fi Fan",
      comments: "2",
      month: "01 JAN 2020",
      link: "Science"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" relative   group ">
      {sliderData.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute transition-opacity duration-700 overflow-hidden  cursor-pointer   ${idx === currentIndex ? "opacity-100" : "opacity-0 "
            }`}
        >
          <Image
            src={slide.image}
            width={1800}
            height={900}
            alt=" "
            className=" w-full"
          />

          <div className="  w-full   z-10 absolute inset-0 bg-black/50   ">
            <div className="text-white flex flex-col justify-center items-center text-center  mx-auto max-w-[650px] h-[700px]  ">
              <AnimateButton animateButton={slide?.link} />

              <div className="mt-5 ">
                <BlogAnimation
                  animateButton={slide?.link}
                  title={slide?.des}
                  des={slide?.name}
                  date={slide?.month}
                  comment={slide?.comments}
                  alignment="justify-center"
                  textSize={"text-4xl"}
                  space={`space-y-6 leading-loose`}

                ></BlogAnimation>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-96 right-20 flex flex-col gap-3 ">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={` z-10 size-3 mx-2 rounded-full cursor-pointer  duration-300   transition-all ${currentIndex === index
              ? "bg-[#E93314] "
              : "border hover:bg-[#E93314] hover:border-none  duration-500 delay-100 ease-in-out transition-all "
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
