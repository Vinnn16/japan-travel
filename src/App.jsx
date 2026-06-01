import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
