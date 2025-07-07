import { response } from 'express';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
        .then(response=>{
            setRecipes(response.data);
        })
    }, []);
  return (
    <div>
        <h2>All Recipes</h2>
        <div>
            {recipes?.map((recipe)=>(
                <div>
                    <h4>{recipe?.title}</h4>
                    <p>{recipe?.ingredients}</p>
                    <small>{recipe?.instructions}</small>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllRecipes