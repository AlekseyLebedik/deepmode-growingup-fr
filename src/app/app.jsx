import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HOCProviders } from "./providers";
import { Routes } from "./routes";

import "./styles/index.scss";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HOCProviders>
      <Routes />
    </HOCProviders>
  </StrictMode>,
);
