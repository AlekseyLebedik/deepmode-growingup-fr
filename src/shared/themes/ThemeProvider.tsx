import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  type ThemeTokens,
  baseTheme,
  riotTheme,
  cyberpunkTheme,
} from "./constants";

const themes: Record<string, ThemeTokens> = {
  base: baseTheme,
  riot: riotTheme,
  cyberpunk: cyberpunkTheme,
};

type ThemeContextProps = {
  theme: ThemeTokens;
  setTheme: (name: string) => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.base,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeTokens>(themes.base);

  const setTheme = (name: string) => {
    if (themes[name]) setCurrentTheme(themes[name]);
  };

  useEffect(() => {
    const root = document.documentElement;
    const { colors, typography, spacing, radius, shadows, animations } =
      currentTheme;

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    Object.entries(typography).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });

    Object.entries(spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    Object.entries(radius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });

    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    Object.entries(animations).forEach(([key, value]) => {
      root.style.setProperty(`--animation-${key}`, value);
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
