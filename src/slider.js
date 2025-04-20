// "use client";
// type Slide = boolean;
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const data: number[] = [1, 2, 3];
//   const firstSlide: Slide = currentIndex === 0;
//   const lastSlide: Slide = currentIndex === data.length - 1;

//   const handlePrev = () => {
//     if (firstSlide) {
//       setCurrentIndex(data.length - 1);
//     } else {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };
//   const handleNext = () => {
//     if (lastSlide) setCurrentIndex(0);
//     else {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         if (prev === data.length - 1) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [data.length]);

//   return (
//     <div className="m-3">
//       <div
//         className={`${
//           currentIndex === 1
//             ? "bg-orange-500"
//             : currentIndex === 2
//             ? "bg-red-500"
//             : "bg-black"
//         }  text-white  h-60 flex flex-col justify-center items-center`}
//       >
//         {data[currentIndex]}
//       </div>
//       <div className="flex justify-center gap-3 mt-3">
//         <button onClick={handlePrev}>
//           <ArrowLeft />
//         </button>
//         <button onClick={handleNext}>
//           <ArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Home = () => {
  const slides: number[] = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const goToSlide = useCallback(
    (direction: "next" | "prev") => {
      setCurrentIndex((prevIndex) => {
        const totalSlides = slides.length;
        if (direction === "next") {
          return (prevIndex + 1) % totalSlides;
        } else {
          return (prevIndex - 1 + totalSlides) % totalSlides;
        }
      });
    },
    [slides.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToSlide("next");
    }, 2000);

    return () => clearInterval(intervalId);
  }, [goToSlide]);

  return (
    <div className="m-3">
      <div className="bg-orange-300 text-white h-60 flex flex-col justify-center items-center text-4xl font-bold">
        {slides[currentIndex]}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => goToSlide("prev")}
          aria-label="Previous Slide"
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => goToSlide("next")}
          aria-label="Next Slide"
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
