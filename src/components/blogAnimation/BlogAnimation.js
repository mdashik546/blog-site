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
  dateSection, by = true }) => {
  return (
    <div className={`space-y-1 ${space}  `}>
      <h1 className={` text-2xl font-medium cursor-pointer ${textSize}`}>
        {title}
      </h1>
      <div className={`flex items-center gap-x-3 ${alignment} `}>
        {
          by && <p className="hover:text-[#E93314]  cursor-pointer duration-300 text-xs font-medium">
            By {des}
          </p>
        }
        <p
          className={`hover:text-[#E93314]  cursor-pointer duration-300 text-xs  ${dateSection}`}
        >
          {date}
        </p>
        <div
          className={`flex items-center gap-x-1 hover:text-[#E93314]  cursor-pointer  duration-300 ${colorChange}`}
        >
          {
            by && <FaRegComments />
          }
          {comment}
        </div>
      </div>
    </div>
  );
};

export default BlogAnimation;
