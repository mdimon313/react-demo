import React from "react";
import { Name } from "../App";

function SubChild() {
  return (
    <div>
      <Name.Consumer>
        {(theme, switchTheme) => {
          return (
            <>
              <h1
                className={`${
                  theme === "dark"
                    ? "text-gray-100 bg-gray-900"
                    : "text-gray-800"
                }`}
              >
                {theme}
              </h1>
              <button
                type="button"
                onClick={() => switchTheme()}
                className="border border-gray-500"
              >
                change bg
              </button>
            </>
          );
        }}
      </Name.Consumer>
    </div>
  );
}

export default SubChild;
