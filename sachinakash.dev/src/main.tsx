import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

declare global {
  interface Window {
    /** Intro loader set up in index.html; absent if it was removed. */
    __intro?: { done: Promise<void>; appLoaded: () => void };
  }
}

const container = document.getElementById("root")!;

// Tell the intro loader the app code has arrived, then mount as it lifts so
// the page's entrance animations play in view rather than behind it.
window.__intro?.appLoaded();
const introDone = window.__intro?.done ?? Promise.resolve();

void introDone.then(() => {
  // Pages are prerendered for search engines and link previews. The client
  // renders fresh rather than hydrating so entrance animations replay cleanly.
  container.replaceChildren();

  createRoot(container).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
