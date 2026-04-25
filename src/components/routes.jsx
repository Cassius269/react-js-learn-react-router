import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import Profile from "../pages/Profile/Profile";
import ErrorBoundary from "../pages/ErrorBoundary/ErrorBoundary";

export const ROUTER = createBrowserRouter([
  {
    path: "/", // URL relative du composant
    // element: <App />, // composant parent
    Component: App, // réference à la fonction du composant
    ErrorBoundary: ErrorBoundary, // capturer les erreurs et afficher le composant ErrorBoundary
    children: [
      {
        // path: "/",
        index: true, // déclarer cette route comme route principale de l'application
        Component: Homepage,
      },
      {
        path: "profile",
        caseSensitive: true,
        Component: Profile,
      },
    ],
  },
]);
