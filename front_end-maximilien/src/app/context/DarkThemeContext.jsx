import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};
