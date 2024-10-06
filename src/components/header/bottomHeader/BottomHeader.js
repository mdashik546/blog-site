"use client";
import { navberData } from "@/components/data/NavberData";
import BriefcaseModal from "@/components/modal/BriefcaseModal";
import SearchModal from "@/components/modal/SearchModal";
import { handleOutSideClickEvent } from "@/components/outsideClick/OutsideClick";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { RiBriefcase2Line } from "react-icons/ri";

const BottomHeader = () => {
  const icons = [
    {
      icon: <BiSearch />,
      action: "BiSearch",
    },
    {
      icon: <LuUser2 />,
      action: "LuUser2",
    },
    {
      icon: <RiBriefcase2Line />,
      action: "RiBriefcase2Line",
    },
  ];

  const [openSearchbar, setOpenSearchbar] = useState(false);
  const [briefcase, setBriefcase] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndexTwo, setHoverIndexTwo] = useState(null)
  const closeHoverRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(closeHoverRef.current);
      setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    closeHoverRef.current = setTimeout(() => {
      setHoverIndex(null);
    
    }, 500);
  };
  const closeHoverRefTwo = useRef(null);

  const handleMouseEnterTwo = (index) => {
    clearTimeout(closeHoverRefTwo.current);
      setHoverIndexTwo(index);
  };

  const handleMouseLeaveTwo = () => {
    closeHoverRefTwo.current = setTimeout(() => {
      setHoverIndexTwo(null);
    
    }, 500);
  };

  const scrollHeader = () => {
    if (window.scrollY > 680) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHeader);
    return () => {
      removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const searchModalRef = useRef(null);
  handleOutSideClickEvent(searchModalRef, setOpenSearchbar);

  const briefcaseModalRef = useRef(null);
  handleOutSideClickEvent(briefcaseModalRef, setBriefcase);

  //   modalOpen
  const handleIcon = (item) => {
    if (item?.action === "BiSearch") {
      setOpenSearchbar(!openSearchbar);
    }

    if (item?.action === "RiBriefcase2Line") {
      setBriefcase((prev) => !prev);
    }
  };

  // modalClose
  const handleClose = (item) => {
    if (item === "BiSearch") {
      setOpenSearchbar(false);
    }
    if (item === "RiBriefcase2Line") {
      setBriefcase(false);
      console.log("briefcase");
    }
  };

  return (
    <div className="relative z-40">
      <div
        className={`bg-[#121418] py-5 px-20  flex items-center justify-between w-full duration-300 transition-all  ease-in-out   ${sticky && "fixed top-0 bg-white shadow-sm border-b  "
          }`}
      >
        <Image
          src={`${sticky ? "/images/logo.webp" : "/images/Logo-dark.webp"}`}
          width={143}
          height={43}
          alt="loading...?"
          className="w-auto h-auto max-w-[143px] max-h-[43px]"
        />

        <nav className="">
          <ul className="flex gap-x-5">
            {navberData?.map((menu, menuIndex) => (
              <li
                onMouseEnter={() => handleMouseEnter(menuIndex)}
                onMouseLeave={() => handleMouseLeave()}
                key={menuIndex}
                className={`    z-10 relative leading-5 cursor-pointer font-medium hover:text-[#DC2F15] duration-300 
                  tracking-wide ${sticky ? "text-gray-700" : "text-white "}`}
              >
                <div>{menu?.title}</div>
                {hoverIndex === menuIndex && menu?.submenus && (
                  <ul
                    className={`absolute top-[52px] left-0   w-[1200px]  bg-[#121418]   
                       ${menuIndex === 0 && `  grid grid-cols-4 -translate-x-[31.8%] `}
                     ${menuIndex === 2 && "-translate-x-[44.3%]  flex gap-x-5"}
                     ${menuIndex === 3 && " -translate-x-[52.75%] flex flex-col bg-gray-800 "}
                    ${[1, 4, 5].includes(menuIndex) && "w-60 px-8"}

                     ${[0]} text-sm 
                       py-5 px-20`}
                  >
                    {menu?.submenus?.map((submenu, subIndex) => (
                      <li
                      onMouseEnter={()=>handleMouseEnterTwo(subIndex)}
                      onMouseLeave={()=>handleMouseLeaveTwo()}
                        key={subIndex}
                        className="text-gray-400 hover:text-white duration-200 ease-in-out transition-colors pb-3.5"
                      >
                        <div>{submenu?.title}</div>

                        {hoverIndexTwo === subIndex && submenu.submenusTwo && (
                          <ul className="absolute top-0 left-[100%] w-60 bg-red-600 p-5 ">
                            {submenu?.submenusTwo?.map((subMenuTwo, subIndexTwo) => (
                              <li key={subIndexTwo} className="pb-3.5 ">
                                <div>
                                  {subMenuTwo.title}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}


                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          ref={searchModalRef}
          className={` flex items-center gap-x-6  ${sticky ? "text-gray-700" : "text-white"
            }`}
        >
          {icons?.map((item, itemIndex) => (
            <button
              onClick={() => handleIcon(item)}
              key={itemIndex}
              className={`text-xl hover:text-[#DC2F15] duration-300  ${openSearchbar && item?.action === "BiSearch"
                ? "invisible"
                : "visible"
                }`}
            >
              {item.icon}
              <div className="relative group z-10 ">
                <div
                  className={`  ${item?.action === "RiBriefcase2Line"
                    ? "absolute size-4 text-xs -bottom-1.5 group-hover:text-white text-white   -right-1 bg-[#E93314] rounded-full"
                    : null
                    } `}
                >
                  {item?.action === "RiBriefcase2Line" && 0}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* /* seachModal */}

      <div
        className={` fixed top-0 duration-500  bg-[#121418]  w-full   transition-all  ease-out  ${openSearchbar
          ? "scale-100 opacity-100  z-40  visible"
          : "scale-95  opacity-0 invisible"
          }`}
      >
        {openSearchbar && (
          <SearchModal
            handleClose={handleClose}
            searchModalRef={searchModalRef}
          />
        )}
      </div>

      {/* briefcaseModal */}

      <div
        className={`  bg-[#121418] size-80 right-5  shadow-lg    z-40  transition-all transform duration-500 ease-in-out   ${briefcase
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible"
          }  ${sticky ? "fixed top-[82px] right-0" : "absolute top-[82px]"}`}
      >
        {briefcase && (
          <BriefcaseModal
            handleClose={handleClose}
          //    briefcaseModalRef={briefcaseModalRef}
          />
        )}
      </div>
    </div>
  );
};

export default BottomHeader;
