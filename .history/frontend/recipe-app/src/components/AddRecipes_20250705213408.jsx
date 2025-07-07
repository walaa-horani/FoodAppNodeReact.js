import React from 'react'

function AddRecipes() {
  return (
    <div>

        <form className='input-form w-50 m-auto' >
            <input  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea  name='instructions' className='form-control mt-3' placeholder='instructions' />

           
        </form>
    </div>
  )
}

export default AddRecipes