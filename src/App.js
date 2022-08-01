import React, { createContext, useState } from "react";
import Home from "./compnent/Home";

const Name = createContext();

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
      <Name.Provider value={{ theme: theme, switchTheme: switchTheme }}>
        <Home />
      </Name.Provider>
    </div>
  );
}

export default App;
export { Name };
