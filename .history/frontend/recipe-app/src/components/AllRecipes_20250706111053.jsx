import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HiHeart } from "react-icons/hi2";

function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
       axios.get("http://localhost:5000/recipe")

        .then(response=>{
            setRecipes(response.data);
        })
    }, []);
  return (
    <div className='recipes-container'>
        <h2>All Recipes</h2>
        
        <div className='cards-wrapper'>
           {recipes.map((recipe) => (
            <div className='recipe-card' key={recipe._id}>
              <h4>{recipe.title}</h4>
              <p>{recipe.ingredients}</p>
              <HiHeart className="icons"/>
            </div>
           ))}
        </div>
    </div>
  )
  
}

export default AllRecipes