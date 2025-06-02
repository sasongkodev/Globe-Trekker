import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import PaketWisata from "./components/PaketWisata";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <PaketWisata />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
