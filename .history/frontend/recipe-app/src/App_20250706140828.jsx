import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRecipes from "./components/MyRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import AddRecipes from "./components/AddRecipes";
import axios from "axios";

export default function App() {

    const getAllRecipes = async () => {
         let AllRecipes= []
        await  axios.get("http://localhost:5000/recipe")
   
           .then(response=>{
              AllRecipes = response.data;
           })
           return AllRecipes;
     
         }
   
         const getMyRecipes = async () => {
           let user = JSON.parse(localStorage.getItem("user"));
           let AllRecipes = await getAllRecipes();
   
           return AllRecipes.filter(recipe => recipe.createdBy === user._id);
           
   
         }


  return (
   
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} loader={getAllRecipes} />
         <Route path="/myRecipes"  element={<MyRecipes />} loader={getMyRecipes} />
          <Route path="/myFavRecipes"  element={<MyFavRecipes />} />
               <Route path="/addRecipe"  element={<AddRecipes />} />

      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
