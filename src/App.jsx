import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {/** Outlet permet de remplacer le contenu du composant en fonction de l'URL saisi par l'utilisateur */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
