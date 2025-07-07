import React, { useState } from 'react'

function InputForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
  return (
    <>
        <form className='input-form' onSubmit={handleSubmit}>
            <input name='email' className='form-control mt-3' type="email" placeholder='Email' />
            <input name='password' className='form-control mt-3' type="password" placeholder='Password' />

            <div  className='text-center'>
            <button className='button mt-5 w-100' type='submit'>Sign In</button>
           </div>
            <p className='mt-3'>Don't have an account? </p>

        </form>
    </>
  )
}

export default InputForm