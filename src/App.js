import "./App.css";
import Navbar from "./components/Navbar";
import AppHero from "./components/Hero";
import Blog from "./components/Blog";
import Imgcollege from "./components/Imgcollege";
import Shop from "./components/Shop";
import Contactus from "./components/Contactus";
import Joinus from "./components/Joinus";
import Bottomblog from "./components/Bottomblog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main>
        <AppHero />
        <Blog />

        <Imgcollege />
        <Shop />
        <Contactus />
        <Joinus />
        <Bottomblog />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
