
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services"; // Yeni ekledik
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services /> {/* Yeni ekledik */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;