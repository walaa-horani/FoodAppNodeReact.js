import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'
import InputForm from './InputForm'
function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  let token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token ? true : false);
  
    useEffect(()=>{
      setIsLogin(token ? true : false);
    },[token])
  const checkLogin = () => {
    if(token){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true)
      
    }
    else{
    setIsOpen(true)
    }
   
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleProtectedRoute = (e) => {
    if (!isLogin) {
      e.preventDefault(); // Prevent navigation
      setIsOpen(true); // Show login modal
    }
  }
 
  return (
    <>
    <header>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
                
           
            <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li  onClick={handleProtectedRoute}><a href={isLogin ? "/myRecipes" : "/"}> My Recipes</a></li>
           
          <li  onClick={handleProtectedRoute}><a href={isLogin ? "/myFavRecipes" : "/"}> My Favourites</a></li>

            <li><a href="/contact">Contact</a></li>
            <button onClick={checkLogin}>{(isLogin) ? "Logout" : "Login"}</button>
            </ul>
        </nav>
    {isOpen && <Modal onClose={closeModal} ><InputForm/></Modal>}

    </header>

    </>
  )
}

export default Navbar