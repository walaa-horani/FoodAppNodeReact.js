import React from 'react'

function AddRecipes() {
  return (
    <div>

        <form className='input-form' onSubmit={handleSubmit}>
            <input  name='title' className='form-control mt-3' type="text" placeholder='title' />
            <input  name='ingredients' className='form-control mt-3' type="text" placeholder='ingredients' />

            <input  name='instructions' className='form-control mt-3' type="text" placeholder='instructions' />

            <h5 className='success'>{(success!= "" ) && success}</h5>
           <h5 className='error'>{(error!= "" ) && error}</h5> 
            <p onClick={() => setIsSignUp(!isSignUp)} className='mt-3'>{(isSignUp) ? "Already have an account?" : "Create an account"} </p>

        </form>
    </div>
  )
}

export default AddRecipes