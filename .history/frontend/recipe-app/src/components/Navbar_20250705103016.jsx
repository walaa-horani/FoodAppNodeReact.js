import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'
import InputForm from './InputForm'
function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  let token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token ? true : false);
  const checkLogin = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
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
            <li><a href="/myRecipes"> My Recipes</a></li>
            <li><a href="/myFavRecipes">Favourites</a></li>
            <li><a href="/contact">Contact</a></li>
            <button onClick={checkLogin}>login</button>
            </ul>
        </nav>

    </header>
    {isOpen && <Modal onClose={closeModal} ><InputForm/></Modal>}

    </>
  )
}

export default Navbar