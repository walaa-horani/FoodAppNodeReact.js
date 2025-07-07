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
        <nav className="navbar navbar-expand-lg mt-3 ">
  <a className="navbar-brand" href="#">
    <img src={logo}/>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Favourites</a>
      </li>
     
      <li className='nav-item' onClick={handleProtectedRoute}><a className='nav-link' href={isLogin ? "/myRecipes" : "/"}> My Recipes</a></li>

        <li className="nav-item">
        <a className="nav-link " href="#">Contact</a>
      </li>
    </ul>
  
  </div>
</nav>

    </header>
    {isOpen && <Modal onClose={closeModal} ><InputForm/></Modal>}

    </>
  )
}

export default Navbar