import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import Profile from "../pages/Profile/Profile";
import ErrorBoundary from "../pages/ErrorBoundary/ErrorBoundary";
import ProfileOverView from "../pages/Profile/pages/ProfileOverView/ProfileOverView";
import ProfileData from "../pages/Profile/pages/ProfileData/ProfileData";
import { homepageLoader } from "../loaders/hompageLoader";
import { rootLoader } from "../loaders/rootLoader";
import { FallbackLayout } from "./fallbacks/FallbackLayout";

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
        // hydrateFallbackElement: (
        //   <p className="text-center mt-5">Chargement en cours</p>
        // ),
        loader: homepageLoader, // source de données de la page d'accueil
      },
      {
        path: "profile/:id?/:name?", // paramètres optionnels
        caseSensitive: true,
        Component: Profile,
        children: [
          {
            index: true, // rendre par défaut le composant ProfileOverView avec l'url "/profile"
            Component: ProfileOverView,
          },
          {
            path: "data",
            Component: ProfileData,
          },
          {
            path: "data/*", // définition de la route par défaut et le composant à afficher le cas échéant pour éviter les erreurs 404 (objectif UX)
            Component: ProfileData,
          },
        ],
      },
    ],
  },
]);
