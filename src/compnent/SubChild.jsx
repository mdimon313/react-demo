import React from "react";

function SubChild({ theme, switchTheme }) {
  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-slate-300" : "bg-gray-800"
      }`}
    >
      <h1
        className={` py-2 text-center text-2xl font-semibold ${
          theme === "light"
            ? "text-gray-800 bg-slate-400"
            : "bg-slate-900 text-gray-300"
        }`}
      >
        Welcome to TailwindCss
      </h1>
      <button
        type="button"
        className={`w-fll py-1 px-3 text-white font-bold text-xl block mx-auto rounded-xl mt-6 ${
          theme === "light" ? "bg-sky-400 " : "bg-blue-500"
        }`}
        onClick={switchTheme}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default SubChild;
