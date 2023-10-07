import "./App.css";
import Navbar from "./components/Navbar";
import AppHero from "./components/Hero";
import Blog from "./components/Blog";
import Imgcollege from "./components/Imgcollege";
import Shop from "./components/Shop";
import Contactus from "./components/Contactus";

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
      </main>
    </>
  );
}

export default App;
