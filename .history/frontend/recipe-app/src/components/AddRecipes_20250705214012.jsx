import React from 'react'

function AddRecipes() {


  return (
    <div>

        <form className='input-form w-50 m-auto' >
            <input onChange={onHandleChange}  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <textarea onChange={onHandleChange} rows="4" className='form-control mt-3' name='ingredients' placeholder='ingredients' />

            <textarea onChange={onHandleChange} rows="4" name='instructions' className='form-control mt-3' placeholder='instructions' />

            <label className='mt-4'>Add Image</label>
            <input onChange={onHandleChange} name='coverImage' className='form-control mt-3' type="file" placeholder='image url' />
        </form>
    </div>
  )
}

export default AddRecipes