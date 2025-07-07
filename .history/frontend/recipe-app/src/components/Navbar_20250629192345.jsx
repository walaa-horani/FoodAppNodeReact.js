import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
                <img src={logo}/>
            </div>
            <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar