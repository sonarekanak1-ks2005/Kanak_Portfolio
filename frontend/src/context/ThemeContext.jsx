import { createContext, useContext, useEffect } from "react";

// AI Command Center is dark-only. Keep the provider so future toggles can re-enable.
const ThemeContext = createContext({ theme: "dark", resolvedTheme: "dark", setTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";
  }, []);
  return (
    <ThemeContext.Provider value={{ theme: "dark", resolvedTheme: "dark", setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
