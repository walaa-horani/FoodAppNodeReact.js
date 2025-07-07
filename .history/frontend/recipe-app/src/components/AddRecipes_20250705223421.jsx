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
        console.log(recipe)
        await axios.post("http://localhost:5000/recipe/", recipe,{
            headers: {
                "Content-Type": "multipart/form-data"
            }  
        })
        .then(()=>navigate("/"))

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