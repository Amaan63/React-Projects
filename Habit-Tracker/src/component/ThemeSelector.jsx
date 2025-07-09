import { useEffect, useState } from "react";

const themes = [
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
];

const ThemeSelector = () => {
  const [activeTheme, setActiveTheme] = useState(
    () => localStorage.getItem("theme") || "dracula"
  );

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setActiveTheme(theme);
  };

  useEffect(() => {
    applyTheme(activeTheme);
  }, []);

  const handleChange = (e) => {
    const selectedTheme = e.target.value;
    applyTheme(selectedTheme);
  };

  return (
    <select
      value={activeTheme}
      onChange={handleChange}
      className="select select-sm w-fit px-4 py-1 border border-primary text-primary bg-base-100 rounded"
    >
      {themes.map((theme) => (
        <option value={theme} key={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelector;
