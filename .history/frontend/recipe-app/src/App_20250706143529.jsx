import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRecipes from "./components/MyRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import AddRecipes from "./components/AddRecipes";

export default function App() {

  
  return (
   
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/myRecipes"  element={<MyRecipes />} />
          <Route path="/myFavRecipes"  element={<MyFavRecipes />} />
               <Route path="/addRecipe"  element={<AddRecipes />} />

      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
