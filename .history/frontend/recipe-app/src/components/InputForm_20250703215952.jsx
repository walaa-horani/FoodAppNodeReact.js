import React from 'react'

function InputForm() {
  return (
    <>
        <form className='input-form'>
            <input className='form-control mt-3' type="text" placeholder='Email' />
            <input className='form-control mt-3' type="password" placeholder='Password' />

            <div  className='text-center'>
            <button className='button mt-5 w-100' type='submit'>Sign In</button>
           </div>
            <p className='mt-5'>Don't have an account? </p>

        </form>
    </>
  )
}

export default InputForm