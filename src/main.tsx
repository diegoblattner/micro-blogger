import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { startMockAPI } from "./mocks/api.ts";
import "./index.css";

startMockAPI()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  })
  .catch((err) => {
    console.error(
      "Failed to load mock api... try refreshing your browser",
      err,
    );
  });
