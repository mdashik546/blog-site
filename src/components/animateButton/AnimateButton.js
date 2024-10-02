const AnimateButton = ({ animateButton, paddingChange }) => {
  return (
    <div className="group">
      <button
        className={`bg-[#E93314] text-white px-4 border-none outline-none uppercase text-[11px]   group-hover:bg-gray-900 duration-500 transition font-medium tracking-wide rounded-full py-0.5 ${paddingChange}`}
      >
        {animateButton}
      </button>
    </div>
  );
};

export default AnimateButton;
