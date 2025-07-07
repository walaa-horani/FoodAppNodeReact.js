import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HiHeart } from "react-icons/hi2";

function AllRecipes({fetchRecipes}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
       if (fetchRecipes) {
         fetchRecipes().then(setRecipes);
       }
    }, [fetchRecipes]);

  return (
    <div className='recipes-container'>
        <h2>All Recipes</h2>
        
        <div className='cards-wrapper'>
           {recipes.map((recipe) => (
            <div className='recipe-card' key={recipe._id}>
              <img className='w-100' src={`http://localhost:5000/public/images/${recipe.coverImage}`} alt={recipe.title} />
              <h4 className='mt-4'> {recipe.title}</h4>
              <p>{recipe.ingredients}</p>
              <HiHeart className="icons"/>
            </div>
           ))}
        </div>
    </div>
  )
  
}

export default AllRecipes