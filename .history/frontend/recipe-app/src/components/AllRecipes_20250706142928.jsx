import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiHeart } from 'react-icons/hi2';

export default function AllRecipes({ filter = "all" }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get('http://localhost:5000/recipe');

      if (filter === "mine") {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;                    // لم يسجّل دخول
        const my = data.filter(r => r.createdBy === user._id);
        setRecipes(my);
      } else {
        setRecipes(data);                     // "all"
      }
    };

    fetchRecipes();
  }, [filter]);   // يعيد الجلب عند تغيّر الفلتر

  return (
    <div className="recipes-container">
      <h2>{filter === "mine" ? "My Recipes" : "All Recipes"}</h2>

      <div className="cards-wrapper">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe._id}>
            <img
              className="w-100"
              src={`http://localhost:5000/public/images/${recipe.coverImage}`}
              alt={recipe.title}
            />
            <h4 className="mt-4">{recipe.title}</h4>
            <p>{recipe.ingredients}</p>
            <HiHeart className="icons" />
          </div>
        ))}
      </div>
    </div>
  );
}
