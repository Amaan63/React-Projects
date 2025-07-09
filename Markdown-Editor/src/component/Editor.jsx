import React from "react";

const Editor = ({ onClear, onChange, markDownCode }) => {
  return (
    <div className="relative w-full md:w-1/2 h-[300px] md:h-full bg-[#1f2937] border-2 border-red-300 rounded-xl overflow-hidden">
      <button
        className="absolute top-2 right-3 md:right-5 bg-gray-500 hover:bg-green-400 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-xl z-10"
        onClick={onClear}
      >
        Clear
      </button>
      <textarea
        name="markdownCode"
        placeholder="Enter your code here..."
        className="w-full h-full resize-none overflow-auto p-4 pr-10 text-white text-sm bg-transparent outline-none custom-scrollbar"
        value={markDownCode}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
