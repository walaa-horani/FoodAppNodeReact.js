import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
   
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/myRecipes"  element={<MyRecipes />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
