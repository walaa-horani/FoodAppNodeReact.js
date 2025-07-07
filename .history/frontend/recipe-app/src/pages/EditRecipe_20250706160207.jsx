import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditRecipe() {


    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate();

    const {id} = useParams(); // Assuming you are using react-router-dom to get the recipe ID from the URL


    useEffect(() => {
    const getRecipe = async () => {
       await axios.get(`http://localhost:5000/recipe/${id}`)
       .then(response=>{
        let res = response.data;
        setRecipe({
            title: res.title,
            ingredients: res.ingredients.join(","),
            instructions: res.instructions,
            coverImage: res.coverImage ? res.coverImage : null // Handle case where coverImage might be null
        })
       })
    }
    getRecipe()
    }, [])
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
             await axios.put(`http://localhost:5000/recipe/${id}`,formData,{
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
            <input value={recipe.title} onChange={onHandleChange}  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea value={recipe.ingredients} onChange={onHandleChange} rows="4" className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea value={recipe.instructions} onChange={onHandleChange} rows="4" name='instructions' className='form-control mt-3' placeholder='instructions' />

            <label className='mt-4'>Add Image</label>
            <input onChange={onHandleChange} name='coverImage' className='form-control mt-3' type="file" placeholder='image url' />

            <button className='button mt-5 w-100' type='submit'>Edit Recipe</button>
      
        </form>
    </div>
  )
}

export default EditRecipe