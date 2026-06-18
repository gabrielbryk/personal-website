import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

// Build-time prerender entry. Returns the static HTML for <App /> so the
// prerender script can inject it into dist/index.html. Wrapped in StrictMode
// to match the client tree in src/main.tsx for clean hydration.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
