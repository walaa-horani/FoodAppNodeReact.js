import React from 'react'
import image_2 from '../assets/image_2.png'
function Home() {
  return (
    <div>
        <section className='home'>
            <div className='left'>
                <h1>Share Your Favorite Recipe with the World</h1>
                <p>Join our community of food lovers and share your favorite recipes with the world. Whether it's a family secret or a new creation, we want to see it!</p>
                <button>Share Your Recipe</button>
            </div>
               <div className='right'>
                <img src={image_2} width="350px"  height="350px"/>

               </div>
      
        </section>
    </div>
  )
}

export default Home