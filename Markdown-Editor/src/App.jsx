import React, { useState } from "react";
import Header from "./component/Header";
import Editor from "./component/Editor";
import Preview from "./component/Preview";
import InfoSection from "./component/InfoSection";
import "./App.css";

const App = () => {
  const [markDownCode, setMarkDownCode] =
    useState(`# 👋 Hey there, curious mind!

    Welcome to **Amaan's Live Markdown Editor** — where your words **instantly come to life** on the right.
    
    ---
    
    ## ✨ What You Can Do Here:
    - Write rich content with **bold**, *italic*, or even ~~strikethrough~~
    - Format code like a dev boss: \`inline\` or full blocks
    - Use markdown magic for [links](https://example.com), lists, tables & more
    - Auto-preview while you type — no need to hit save
    
    ---
    
    ### 🛠️ Try typing below:
    - \`*italic*\`, \`**bold**\`, \`~~strikethrough~~\`
    - \`[Link](https://example.com)\`
    - \`> blockquote\`
    - \`1. Numbered\n- Unordered\` lists
    
    \`\`\`javascript
    // Paste your code here!
    const greet = () => {
      console.log("Hello from Amaan's editor 👨‍💻");
    };
    greet();
    \`\`\`
    
    > “Great writing starts with great formatting.” — You, after using this 😉
    
    ---
    
    ### ⚠️ Just a heads up:
    If you're reading this, you're already in the right place.  
    Start typing and let Markdown do its thing. I’ve set it up *just for you*.
    
    ---
    
    Let's write something amazing together 🚀
    `);

  const handleOnChange = (e) => {
    setMarkDownCode(e.target.value);
  };

  const handleClear = () => {
    setMarkDownCode("");
  };

  return (
    <div className="bg-[#0d1117] min-h-screen font-bold flex flex-col">
      <Header />

      {/* Info Section */}
      <div className="flex justify-center px-4 mt-1 md:mt-3">
        <InfoSection />
      </div>

      {/* Editor + Preview Section */}
      <div className="flex-1 flex justify-center items-start px-2 py-2 overflow-hidden">
        <div className="w-full max-w-6xl h-auto md:h-[600px] shadow-xl rounded-xl p-3 md:p-6 flex flex-col md:flex-row gap-4">
          <Editor
            onChange={handleOnChange}
            markDownCode={markDownCode}
            onClear={handleClear}
          />
          <Preview code={markDownCode} />
        </div>
      </div>
    </div>
  );
};

export default App;
