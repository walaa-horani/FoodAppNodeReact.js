import { response } from 'express';
import React, { useEffect, useState } from 'react'

function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
        .then(response=>{
            setRecipes(response.data);
        })
    }, []);
  return (
    <div></div>
  )
}

export default AllRecipes