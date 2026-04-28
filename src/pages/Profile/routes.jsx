import { lazy } from "react";
import profileFormAction from "../../actions/profileFormAction";

const ProfileOverView = lazy(
  () => import("../../pages/Profile/pages/ProfileOverView/ProfileOverView"),
);
const ProfileData = lazy(
  () => import("../../pages/Profile/pages/ProfileData/ProfileData"),
);

const ProfileForm = lazy(
  () => import("../../pages/Profile/pages/ProfileForm/ProfileForm"),
);

export const PROFILE_ROUTES = [
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
  {
    path: "form",
    action: profileFormAction, //logique de gestion du formulaire
    Component: ProfileForm,
  },
];
