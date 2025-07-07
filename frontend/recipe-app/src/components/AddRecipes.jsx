import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddRecipes() {


    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate();


    const onHandleChange = (e) => {
     console.log(e.target.files?.[0])
      let val;
         if (e.target.name === "ingredients"){
              val = e.target.value.split(",");
            }  else if(e.target.name === "coverImage"){
                  val = e.target.files[0];
            }else {
            val = e.target.value;
        }
        setRecipe(prev => ({...prev, [e.target.name]: val}))
         
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(recipe)
       try {
            const formData = new FormData();
             formData.append('title', recipe.title);
             formData.append('ingredients', recipe.ingredients);
            formData.append('instructions', recipe.instructions);
          
            if (recipe.coverImage) {
                formData.append('coverImage', recipe.coverImage);
            }
             console.log('Sending recipe data:', recipe);
             await axios.post("http://localhost:5000/recipe/",formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
             })
              navigate("/");
       } catch (error) {
            console.error('Error adding recipe:', error);
            
       }

    }
  return (
    <div>

        <form onSubmit={onHandleSubmit} className='input-form w-50 m-auto' >
            <input onChange={onHandleChange}  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea onChange={onHandleChange} rows="4" className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea onChange={onHandleChange} rows="4" name='instructions' className='form-control mt-3' placeholder='instructions' />

            <label className='mt-4'>Add Image</label>
            <input onChange={onHandleChange} name='coverImage' className='form-control mt-3' type="file" placeholder='image url' />

            <button className='button mt-5 w-100' type='submit'>Add Recipe</button>
      
        </form>
    </div>
  )
}

export default AddRecipes