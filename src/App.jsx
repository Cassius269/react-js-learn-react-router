import { Outlet, ScrollRestoration, useNavigation } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Loading() {}

function App() {
  // const location = useLocation();
  // console.log(location);

  const { state } = useNavigation();
  console.log(state);

  return (
    <>
      <Header />
      <main>
        {/** Le loader global de l'app */}
        {state === "loading" && (
          <h2 className="mt-5">
            Chargement en cours...depuis le loader globale
          </h2>
        )}
        {/** Outlet permet de remplacer le contenu du composant en fonction de l'URL saisi par l'utilisateur */}
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
