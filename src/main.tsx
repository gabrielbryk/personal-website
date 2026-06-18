import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The HTML is prerendered at build time (see scripts/prerender.mjs), so we
// hydrate the existing markup instead of doing a fresh client render.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
