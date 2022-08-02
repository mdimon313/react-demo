import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import SubChild from "./SubChild";

function Child() {
  return (
    <div>
      <>
        <ThemeContext.Consumer>
          {({ theme, switchTheme }) => {
            return <SubChild theme={theme} switchTheme={switchTheme} />;
          }}
        </ThemeContext.Consumer>
      </>
    </div>
  );
}

export default Child;
