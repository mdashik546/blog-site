import { FaRegComments } from "react-icons/fa6";
const BlogAnimation = ({
  title,
  des,
  date,
  comment,
  space,
  alignment,
  textSize,
  colorChange,
  dateSection, }) => {
  return (
    <div className={`space-y-1 ${space}  `}>
      <h1 className={`text-2xl font-medium cursor-pointer ${textSize}`}>
        {title}
      </h1>
      <div className={`flex items-center gap-x-3 ${alignment} `}>
        <p className="hover:text-[#E93314]  cursor-pointer duration-300 text-xs font-semibold">
          BY {des}
        </p>
        <p
          className={`hover:text-[#E93314]  cursor-pointer duration-300 text-xs font-semibold ${dateSection}`}
        >
          {date}
        </p>
        <div
          className={`flex items-center gap-x-1 hover:text-[#E93314]  cursor-pointer  duration-300 ${colorChange}`}
        >
          <FaRegComments />
          {comment}
        </div>
      </div>
    </div>
  );
};

export default BlogAnimation;
