import React, { useState } from "react";

const InfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-[75%] bg-[#1f2937] text-white rounded-xl p-4 md:p-6 shadow-md text-sm md:text-base">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-[#38bdf8]">
          Markdown Quick Guide
        </h2>
        <span className="text-lg md:text-xl">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-3">
            <MarkdownTip label="Headers">
              <Code>#</Code>, <Code>##</Code>, <Code>###</Code>
            </MarkdownTip>
            <MarkdownTip label="Bold">
              <Code className="text-pink-200">**text**</Code> or{" "}
              <Code className="text-pink-200">__text__</Code>
            </MarkdownTip>
            <MarkdownTip label="Italic">
              <Code className="text-green-200">*text*</Code> or{" "}
              <Code className="text-green-200">_text_</Code>
            </MarkdownTip>
            <MarkdownTip label="Strikethrough">
              <Code className="text-red-200">~~text~~</Code>
            </MarkdownTip>
            <MarkdownTip label="Blockquote">
              <Code className="text-blue-200">&gt; quoted text</Code>
            </MarkdownTip>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <MarkdownTip label="Links">
              <Code className="text-indigo-200">
                [title](https://example.com)
              </Code>
            </MarkdownTip>
            <MarkdownTip label="Lists">
              <Code className="text-orange-200">- Item</Code> or{" "}
              <Code className="text-orange-200">1. Item</Code>
            </MarkdownTip>
            <MarkdownTip label="Inline Code">
              <Code className="text-lime-200">`code`</Code>
            </MarkdownTip>
            <MarkdownTip label="Code Blocks">
              <Code className="text-fuchsia-200">```language</Code> ...{" "}
              <Code className="text-fuchsia-200">```</Code>
            </MarkdownTip>
            <MarkdownTip label="Divider">
              <Code className="text-cyan-200">---</Code>
            </MarkdownTip>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Components
const MarkdownTip = ({ label, children }) => (
  <p>
    <strong>{label}:</strong> {children}
  </p>
);

const Code = ({ children, className = "text-yellow-200" }) => (
  <code className={`bg-gray-800 px-1.5 py-0.5 rounded text-sm ${className}`}>
    {children}
  </code>
);

export default InfoSection;
