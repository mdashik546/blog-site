import { RxCross1 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";

const SearchModal = ({ handleClose, searchModalRef }) => {
    return (

        <div ref={searchModalRef}>
            <button
                onClick={() => handleClose("BiSearch")}
                className="absolute right-20"
            >
                <RxCross1
                    className="text-white hover:-rotate-90 duration-300"
                    size={30}
                />
            </button>
            <div className="w-8/12 mx-auto flex flex-col justify-center h-[410px] ">
                <div className="relative">
                    <input id="search"
                        type="search"
                        className="bg-transparent outline-none placeholder:text-2xl text-2xl w-full border-b pb-4 pr-10 text-white  border-gray-500     "
                        placeholder="Type here and hit enter"
                    />
                    <label htmlFor='search' className="absolute right-0 top-0 hover:text-white duration-300 text-gray-400  text-3xl cursor-pointer ">
                        <LuSearch />
                    </label>
                </div>
            </div>
        </div>

    );
};

export default SearchModal;