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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Home</a>
          <a class="dropdown-item" href="#">My Recipies</a>
         
          <a class="dropdown-item" href="#">My Favourites</a>
          <a class="dropdown-item" href="#">Contact</a>

        </div>
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