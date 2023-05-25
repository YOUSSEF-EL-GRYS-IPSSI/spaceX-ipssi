import React, { createContext } from "react";

export const ThemeContext = createContext();

export const Layout = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <div className="layout-container">
        <header className="">header</header>

        <main>{children}</main>
        <footer></footer>
      </div>
    </ThemeContext.Provider>
  );
};
