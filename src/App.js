import React, { useState } from "react";
import Home from "./compnent/Home";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    if (theme === "dark") {
      return setTheme("light");
    } else {
      return setTheme("dark");
    }
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme: theme, switchTheme: switchTheme }}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
