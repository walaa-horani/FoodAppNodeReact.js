import React from 'react'

function AddRecipes() {
  return (
    <div>

        <form className='input-form w-50' >
            <input  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <input  name='ingredients' className='form-control mt-3' type="text" placeholder='ingredients' />

            <input  name='instructions' className='form-control mt-3' type="text" placeholder='instructions' />

           
        </form>
    </div>
  )
}

export default AddRecipes