import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { rootLoader } from "./loaders/rootLoader";
import { Suspense } from "react";

function App() {
  // const location = useLocation();
  // console.log(location);

  const { state } = useNavigation();
  console.log(state);

  // Récupérer l'utilisateur connecté
  const { user } = useLoaderData(rootLoader);
  console.log(user);
  return (
    <>
      <Header />
      <main>
        {/** Le loader global de l'app */}
        {state === "loading" && (
          <h2 className="mt-5 mb-5 text-info">
            Chargement des données en cours...depuis le loader globale
          </h2>
        )}
        {/** Outlet permet de remplacer le contenu du composant en fonction de l'URL saisi par l'utilisateur */}
        <Suspense
          fallback={<p className="text-center">chargement du composant</p>}
        >
          <Outlet context={{ user }} />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
