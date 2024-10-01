"use client";
import { navberData } from "@/components/data/NavberData";
import BriefcaseModal from "@/components/modal/BriefcaseModal";
import SearchModal from "@/components/modal/SearchModal";
import { handleOutSideClickEvent } from "@/components/outsideClick/OutsideClick";
import Image from "next/image";
import { useRef, useState } from "react";
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
    
    const searchModalRef = useRef(null);
    handleOutSideClickEvent(searchModalRef, setOpenSearchbar);

    const briefcaseModalRef = useRef(null)
    handleOutSideClickEvent(briefcaseModalRef, setBriefcase);

 
    const handleIcon = (item) => {
        if (item?.action === "BiSearch") {
            setOpenSearchbar(!openSearchbar);
        }
        else if (item?.action === "RiBriefcase2Line") {
            setBriefcase(!briefcase);
        }
    };

    const handleClose = (item) => {
        if (item === "BiSearch") {
            setOpenSearchbar(false);
        } else if (item === "RiBriefcase2Line") {
            setBriefcase(false);
        }
    };




    return (
        <div className="relative">
            <div className=" bg-[#121418] py-5 px-20  flex items-center justify-between  ">
                <Image
                    src="/images/Logo-dark.webp"
                    width={143}
                    height={43}
                    alt="loading...?"
                />

                <nav>
                    <ul className="flex gap-x-5 ">
                        {navberData?.map((nav) => (
                            <li
                                key={nav?.id}
                                className="text-white z-10 leading-5 cursor-pointer font-medium hover:text-[#DC2F15] duration-300 tracking-wide"
                            >
                                <div>{nav?.title}</div>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div ref={searchModalRef} className="text-white flex items-center gap-x-6 ">
                    {icons?.map((item, index) => (
                        <button
                            onClick={() => handleIcon(item)}
                            key={index}
                            className={`text-xl hover:text-[#DC2F15] duration-300 ${openSearchbar && item?.action === "BiSearch"
                                ? "invisible"
                                : "visible"
                                }`}
                        >
                            <div className="relative group z-10 ">
                                {item.icon}
                                <div ref={briefcaseModalRef}
                                    className={`  ${item?.action === "RiBriefcase2Line"
                                        ? "absolute size-4 text-xs -bottom-1.5 group-hover:text-white text-white -right-1 bg-[#E93314] rounded-full"
                                        : null
                                        }`}
                                >
                                    {item?.action === "RiBriefcase2Line" && 0}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* /* seachModal */}
        <div>
        <div className={` fixed top-0   bg-[#121418] h-[410px] w-full px-20 py-10 transform transition-all duration-500 ease-in-out  ${openSearchbar ? "scale-100 opacity-100  z-40 " : "scale-95 opacity-0 "
                }`}>
                {openSearchbar && <SearchModal handleClose={handleClose} searchModalRef={searchModalRef} />}
            </div>
        </div>


            {/* briefcaseModal */}
            <div className="flex justify-end mr-5 ">
                <div className={`bg-[#121418] size-80  absolute  transition-all transform duration-500 ease-in-out  ${briefcase ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}>
                    {briefcase && <BriefcaseModal handleClose={handleClose}  briefcaseModalRef={briefcaseModalRef} />}
                </div>
            </div>

        </div>
    );
};

export default BottomHeader;
