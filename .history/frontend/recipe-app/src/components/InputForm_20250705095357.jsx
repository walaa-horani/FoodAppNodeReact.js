import axios from 'axios';
import React, { useState } from 'react'

function InputForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        let endPoint=(isSignUp) ?"register":"signin"

        await axios.post(`http://localhost:5000/user/${endPoint}`, { email, password })
        .then((response) => {

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            setSuccess(response.data.message);
            
        })
        .catch(err =>setError(err.response?.data?.message))
    }  
  return (
    <>
        <form className='input-form' onSubmit={handleSubmit}>
            <input onChange={(e)=> setEmail(e.target.value)} name='email' className='form-control mt-3' type="email" placeholder='Email' />
            <input onChange={(e)=> setPassword(e.target.value)} name='password' className='form-control mt-3' type="password" placeholder='Password' />

            <div  className='text-center'>
            <button className='button mt-5 w-100' type='submit'>{(isSignUp ? "Sign Up" : "log In")}</button>
           </div>
            <h5 className='success'>{(success!= "" ) && success}</h5>
           <h5 className='error'>{(error!= "" ) && error}</h5> 
            <p onClick={() => setIsSignUp(!isSignUp)} className='mt-3'>{(isSignUp) ? "Already have an account?" : "Create an account"} </p>

        </form>
    </>
  )
}

export default InputForm