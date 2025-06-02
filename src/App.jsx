import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import PaketWisata from "./components/PaketWisata";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Contoh: fetch data dari API
    const fetchData = async () => {
      try {
        // Simulasi fetch data
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Destination />
          <PaketWisata />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
