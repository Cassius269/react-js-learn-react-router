import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorBoundary from "../pages/ErrorBoundary/ErrorBoundary";
import { homepageLoader } from "../loaders/hompageLoader";
import { rootLoader } from "../loaders/rootLoader";
import { FallbackLayout } from "./fallbacks/FallbackLayout";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { lazy } from "react";
import { PROFILE_ROUTES } from "../pages/Profile/routes";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Profile = lazy(() => import("../pages/Profile/Profile"));

export const ROUTER = createBrowserRouter([
  {
    path: "/", // URL relative du composant
    // element: <App />, // composant racine
    Component: App, // réference à la fonction du composant
    hydrateFallbackElement: <FallbackLayout />,
    loader: rootLoader, // chargeur de données du composant App
    ErrorBoundary: ErrorBoundary, // capturer les erreurs et afficher le composant ErrorBoundary
    children: [
      {
        // path: "/",
        index: true, // déclarer cette route comme route principale de l'application
        Component: Homepage,
        loader: homepageLoader, // source de données de la page d'accueil
      },
      {
        path: "profile/:id?/:name?", // paramètres optionnels
        caseSensitive: true,
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: PROFILE_ROUTES,
      },
    ],
  },
]);
