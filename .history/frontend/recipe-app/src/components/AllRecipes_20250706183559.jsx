import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HiHeart } from "react-icons/hi2";

function AllRecipes() {
    const [recipes, setRecipes] = useState([]);
      const [favorites, setFavorites] = useState([]);



    useEffect(() => {
       axios.get("http://localhost:5000/recipe")

        .then(response=>{
            setRecipes(response.data);
        })
    }, []);

       const toggleFavorite=(recipeId)=>{
        try {
          const res = axios.put(`http://localhost:5000/user/favorite/${recipeId}`, null,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
            setFavorites(res.data.favorites);
        } catch (error) {
           console.error("Favorite toggle error:", err);
        }
       }

  return (
    <div className='recipes-container'>
        <h2>All Recipes</h2>
        
        <div className='cards-wrapper'>
           {recipes.map((recipe) => (
            <div className='recipe-card' key={recipe._id}>
              <img className='w-100' src={`http://localhost:5000/public/images/${recipe.coverImage}`} alt={recipe.title} />
              <h4 className='mt-4'> {recipe.title}</h4>
              <p>{recipe.ingredients}</p>
              <HiHeart onClick={() => toggleFavorite(recipe._id)} className="icons"/>
            </div>
           ))}
        </div>
    </div>
  )
  
}

export default AllRecipes