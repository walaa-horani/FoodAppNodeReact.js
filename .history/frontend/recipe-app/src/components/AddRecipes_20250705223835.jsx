import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add this import!

function AddRecipes() {
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onHandleChange = (e) => {
        console.log(e.target.files?.[0])
        let val;
        
        if (e.target.name === "ingredients") {
            val = e.target.value.split(",");
        } else if (e.target.name === "coverImage") {
            val = e.target.files[0];
        } else {
            val = e.target.value;
        }
        
        setRecipe(prev => ({...prev, [e.target.name]: val}))
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
            <form onSubmit={onHandleSubmit} className='input-form w-50 m-auto'>
                <input 
                    onChange={onHandleChange}  
                    name='title' 
                    className='form-control mt-3' 
                    type="text" 
                    placeholder='Title'
                    required
                />
                
                <textarea 
                    onChange={onHandleChange} 
                    rows="4" 
                    className='form-control mt-3' 
                    name='ingredients' 
                    placeholder='Ingredients (comma separated)'
                    required
                />

                <textarea 
                    onChange={onHandleChange} 
                    rows="4" 
                    name='instructions' 
                    className='form-control mt-3' 
                    placeholder='Instructions'
                    required
                />

                <label className='mt-4'>Add Image</label>
                <input 
                    onChange={onHandleChange} 
                    name='coverImage' 
                    className='form-control mt-3' 
                    type="file" 
                    accept="image/*"
                />

                <button 
                    className='button mt-5 w-100' 
                    type='submit'
                    disabled={loading}
                >
                    {loading ? 'Adding Recipe...' : 'Add Recipe'}
                </button>
            </form>
        </div>
    )
}

export default AddRecipes