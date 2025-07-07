import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddRecipes() {


    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate();


    const onHandleChange = (e) => {

    console.log(e.target.files[0])
      let val= (e.target.name ==="ingredients" ? e.target.value.split(",") : (e.target.name ==="coverImage" ? e.target.files[0] : e.target.value))
      setRecipe(prev=>({...prev, [e.target.name]: val}))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        
        try {
            // Create FormData object for file upload
            const formData = new FormData();
            formData.append('title', recipe.title);
            formData.append('ingredients', recipe.ingredients ? recipe.ingredients.join(',') : '');
            formData.append('instructions', recipe.instructions);
            
            if (recipe.coverImage) {
                formData.append('coverImage', recipe.coverImage);
            }

            console.log('Sending recipe data:', recipe);
            
            await axios.post("http://localhost:5000/recipe/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }  
            });
            
            navigate("/");
        } catch (error) {
            console.error('Error adding recipe:', error);
            alert('Error adding recipe. Please try again.');
        } finally {
            setLoading(false);
        }
    }
  return (
    <div>

        <form onSubmit={onHandleSubmit} className='input-form w-50 m-auto' >
            <input onChange={onHandleChange}  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea onChange={onHandleChange} rows="4" className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea onChange={onHandleChange} rows="4" name='instructions' className='form-control mt-3' placeholder='instructions' />

            <label className='mt-4'>Add Image</label>
            <input onChange={onHandleChange} name='coverImage' className='form-control mt-3' type="file" placeholder='image url' accept="image/*"/>

            <button className='button mt-5 w-100' type='submit'>Add Recipe</button>
      
        </form>
    </div>
  )
}

export default AddRecipes