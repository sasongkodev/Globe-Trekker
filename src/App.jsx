import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
 import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import PaketWisata from "./components/PaketWisata";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// Context
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Navbar />
              <Routes>
                {/* Halaman Utama */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Destination />
                      <PaketWisata />
                      <Testimonials />
                    </>
                  }
                />

                {/* Autentikasi */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
