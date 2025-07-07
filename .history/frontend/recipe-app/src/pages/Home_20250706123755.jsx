import React, { useState } from 'react'
import image_2 from "../assets/banner2.png"
import image_3 from "../assets/image_3.png"

import "../App.css"
import AllRecipes from '../components/AllRecipes'
import { useNavigate } from 'react-router-dom';
function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const addRecipies = () => {
        let token = localStorage.getItem("token");
          if(token){
            navigate("/addRecipe");
          }else{
            setIsOpen(true);
          }

  }
const navigate = useNavigate();
  return (
    <div>
        <section className='home'>
            <div className='left'>
                <h1>Share Your Favorite Recipe with the World</h1>
                <p>Join our community of food lovers and share your favorite recipes with the world. Whether it's a family secret or a new creation, we want to see it!</p>
                <button onClick={addRecipies}>Share Your Recipe</button>
            </div>
               <div className='right d-flex'>
                <img src={image_3} height="350px"/>

               </div>
                  
        </section>
        <div className='bg'>   
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff9560" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
     {isOpen && <Modal onClose={closeModal} ><InputForm/></Modal>}

        <AllRecipes />
    </div>
  )
}

export default Home