import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiHeart } from 'react-icons/hi2';
import { HiMiniPencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

function MyRecipes() {


      const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const fetchMyRecipes = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return;
            const {data} = await axios.get("http://localhost:5000/recipe")
            const myRecipes = data.filter(recipe => recipe.createdBy === user._id);
             setRecipes(myRecipes);



        }
        fetchMyRecipes()
    }, []);
  return (
    <div className="recipes-container">
      <h2>My Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="cards-wrapper">
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <img
                className="w-100"
                src={`http://localhost:5000/public/images/${recipe.coverImage}`}
                alt={recipe.title}
              />
              <h4 className="mt-4">{recipe.title}</h4>
              <p>{recipe.ingredients}</p>
              <HiHeart className="icons" />
              <div className='mt-2 '>

              <HiMiniPencilSquare />
              <MdDeleteOutline/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes