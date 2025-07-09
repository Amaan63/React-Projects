import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

This is a **live preview** markdown editor!

## Features
- Real-time preview
- Clean interface
- Easy to use

### Try editing this text:
- Add some *italic* text
- Make text **bold**
- Create [links](https://example.com)
- Add \`inline code\`

\`\`\`javascript
// Code blocks work too!
function hello() {
  console.log("Hello, world!");
}
\`\`\`

> Blockquotes are also supported

1. Numbered lists
2. Work perfectly
3. As expected

---

Happy writing! ✨`);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">
              Live Markdown Editor
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Editor */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Editor</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="flex-1 w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              placeholder="Start typing your markdown here..."
            />
          </div>

          {/* Preview */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Preview
            </h2>
            <div className="flex-1 w-full p-4 border border-gray-300 rounded-lg bg-white overflow-auto prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold mb-4 text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-medium mb-2 text-gray-900">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 ml-6 list-disc text-gray-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 ml-6 list-decimal text-gray-700">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  hr: () => <hr className="my-6 border-gray-300" />,
                }}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
