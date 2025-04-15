import React, { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Always ensure light mode
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  // Provide a dummy context with darkMode always false and noop toggleTheme
  const value = {
    darkMode: false,
    toggleTheme: () => {}, // No-op function
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
