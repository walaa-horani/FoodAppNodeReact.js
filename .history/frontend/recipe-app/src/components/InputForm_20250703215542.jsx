import React from 'react'

function InputForm() {
  return (
    <>
        <form className='input-form'>
            <input className='input-field' type="text" placeholder='Email' />
            <input className='input' type="password" placeholder='Password' />
            <button className='button' type='submit'>Sign In</button>
            <p>Don't have an account? </p>

        </form>
    </>
  )
}

export default InputForm