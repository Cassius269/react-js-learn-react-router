import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const FallbackLayout = () => (
  <>
    <Header />
    <main className="text-center mt-5">
      <p>Chargement en cours...</p>
    </main>
    <Footer />
  </>
);

export { FallbackLayout };
