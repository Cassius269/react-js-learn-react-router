import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import Profile from "../pages/Profile/Profile";

export const ROUTER = createBrowserRouter([
  {
    path: "/", // URL relative du composant
    element: <App />, // composant parent
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
