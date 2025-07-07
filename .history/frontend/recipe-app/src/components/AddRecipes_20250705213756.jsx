import React from 'react'

function AddRecipes() {
  return (
    <div>

        <form className='input-form w-50 m-auto' >
            <input  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea rows="4" className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea rows="4" name='instructions' className='form-control mt-3' placeholder='instructions' />

            <label className='mt-5'>Add Image</label>
            <input name='image' className='form-control mt-3' type="file" placeholder='image url' />
        </form>
    </div>
  )
}

export default AddRecipes