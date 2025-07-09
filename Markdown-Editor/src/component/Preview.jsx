import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Preview = ({ code }) => {
  return (
    <div className="w-full md:w-1/2 h-[60%] md:h-full bg-[#1f2937] border-2 border-red-300 rounded-xl overflow-hidden">
      <div className="w-full h-full overflow-auto p-4 custom-scrollbar">
        <div className="max-w-none text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-4 text-white border-b border-gray-600 pb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mb-3 text-white border-b border-gray-700 pb-1">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium mb-2 text-white">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg font-medium mb-2 text-white">
                  {children}
                </h4>
              ),
              h5: ({ children }) => (
                <h5 className="text-base font-medium mb-2 text-white">
                  {children}
                </h5>
              ),
              h6: ({ children }) => (
                <h6 className="text-sm font-medium mb-2 text-white">
                  {children}
                </h6>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-200 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc text-gray-200 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-6 list-decimal text-gray-200 space-y-1">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-200">{children}</li>
              ),
              code: ({ inline, children }) =>
                inline ? (
                  <code className="bg-gray-800 text-pink-300 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ) : (
                  <code className="text-gray-200 font-mono">{children}</code>
                ),
              pre: ({ children }) => (
                <pre className="bg-gray-900 border border-gray-700 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-red-400 pl-4 italic my-4 text-gray-300 bg-gray-900 py-2">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-white">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-gray-200">{children}</em>
              ),
              hr: () => <hr className="my-6 border-gray-600" />,
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-600">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="bg-gray-900">{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-gray-600">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="border border-gray-600 px-4 py-2 text-left text-white font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full h-auto rounded-lg my-4"
                />
              ),
            }}
          >
            {code || "### Preview will appear here..."}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Preview;
