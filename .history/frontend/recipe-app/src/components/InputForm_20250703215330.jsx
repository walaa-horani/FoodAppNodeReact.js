import React from 'react'

function InputForm() {
  return (
    <>
        <form className='input-form'>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign In</button>
            <p>Don't have an account? </p>

        </form>
    </>
  )
}

export default InputForm