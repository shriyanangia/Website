"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../_hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const isClient = typeof window !== "undefined"; // Ensure `window` is available
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    isClient ? window.matchMedia("(prefers-color-scheme: dark)").matches : false,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Apply Tailwind's dark mode class
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
