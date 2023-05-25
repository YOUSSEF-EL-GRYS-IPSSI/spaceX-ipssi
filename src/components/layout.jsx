import React, { createContext } from "react";

export const ThemeContext = createContext();

export const Layout = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <div>
        <header className="App-header text-3xl"></header>

        <main>{children}</main>
        <footer></footer>
      </div>
    </ThemeContext.Provider>
  );
};
