export type ThemeTokens = {
  colors: {
    bg: string;
    bgSecondary: string;
    surface: string;
    surfaceHover: string;
    surfaceActive: string;
    text: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    gridDayBg: string;
    gridDayBorder: string;
    gridDayHover: string;
    gridDaySelected: string;
    gridDayProcrastinated: string;
    gridDayProductive: string;
    gridDayMinGoal: string;
    gridDayMaxGoal: string;
    waterfillLow: string;
    waterfillMedium: string;
    waterfillHigh: string;
  };
  typography: {
    fontPrimary: string;
    fontAccent: string;
    sizeXs: string;
    sizeSm: string;
    sizeMd: string;
    sizeLg: string;
    sizeXl: string;
    sizeXxl: string;
    sizeEvent: string;
    sizeProgress: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    gridCell: string;
    gridRowHeight: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    glow: string;
  };
  animations: {
    fast: string;
    medium: string;
    slow: string;
    scaleIn: string;
    fadeIn: string;
    bounce: string;
    glow: string;
    waterfill: string;
    goalProgress: string;
  };
};

export const baseTheme: ThemeTokens = {
  colors: {
    bg: "#1e1e2f",
    bgSecondary: "#2a2a3f",
    surface: "#2e2e4a",
    surfaceHover: "#3a3a5a",
    surfaceActive: "#505070",
    text: "#ffffff",
    textSecondary: "#c0c0d0",
    accent: "#ff6b6b",
    accentHover: "#ff8787",
    danger: "#ff4d4d",
    success: "#4dff99",
    warning: "#ffcc33",
    info: "#33ccff",
    gridDayBg: "#2e2e4a",
    gridDayBorder: "#444466",
    gridDayHover: "#555588",
    gridDaySelected: "#6b6bb5",
    gridDayProcrastinated: "#ff4d4d",
    gridDayProductive: "#4dff99",
    gridDayMinGoal: "#ffcc33",
    gridDayMaxGoal: "#33ccff",
    waterfillLow: "#33ccff",
    waterfillMedium: "#3399ff",
    waterfillHigh: "#3366ff",
  },
  typography: {
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Orbitron', sans-serif",
    sizeXs: "0.75rem",
    sizeSm: "0.875rem",
    sizeMd: "1rem",
    sizeLg: "1.125rem",
    sizeXl: "1.5rem",
    sizeXxl: "2rem",
    sizeEvent: "0.875rem",
    sizeProgress: "0.875rem",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    gridCell: "50px",
    gridRowHeight: "40px",
  },
  radius: { sm: "4px", md: "8px", lg: "16px" },
  shadows: {
    xs: "0 1px 2px rgba(0,0,0,0.2)",
    sm: "0 2px 4px rgba(0,0,0,0.25)",
    md: "0 4px 8px rgba(0,0,0,0.3)",
    lg: "0 8px 16px rgba(0,0,0,0.35)",
    glow: "0 0 12px rgba(51, 204, 255, 0.6)",
  },
  animations: {
    fast: "0.1s ease-in-out",
    medium: "0.25s ease-in-out",
    slow: "0.5s ease-in-out",
    scaleIn: "scale-in 0.25s ease-out",
    fadeIn: "fade-in 0.25s ease-out",
    bounce: "bounce 0.5s ease-out",
    glow: "glow 0.3s ease-in-out",
    waterfill: "waterfill 1s ease-in-out",
    goalProgress: "progress-grow 0.5s ease-in-out",
  },
};

export const riotTheme: ThemeTokens = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg: "#1b1b2f",
    accent: "#ff3d71",
    accentHover: "#ff5c8d",
    gridDaySelected: "#ff3d71",
    waterfillHigh: "#ff3d71",
  },
};

export const cyberpunkTheme: ThemeTokens = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg: "#0d0d1f",
    accent: "#00ffea",
    accentHover: "#33fff0",
    gridDaySelected: "#00ffea",
    waterfillHigh: "#00ffea",
  },
};
