import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/app.scss";
import { RouterProvider } from "react-router";
import { ROUTER } from "./components/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={ROUTER} />
  </StrictMode>,
);
