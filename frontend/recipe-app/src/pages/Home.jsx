import React, { useState } from 'react';
import image_3 from '../assets/image_3.png';
import '../App.css';
import AllRecipes from '../components/AllRecipes';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';

function Home({ showMine = false }) {       // ← prop يأتينا من App
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const addRecipies = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/addRecipe');
    } else {
      setIsOpen(true);
    }
  };

  // ✨ دالة إغلاق المودال (كانت مفقودة)
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <section className="home">
        <div className="left">
          <h1>Share Your Favorite Recipe with the World</h1>
          <p>
            Join our community of food lovers and share your favorite recipes
            with the world. Whether it's a family secret or a new creation, we
            want to see it!
          </p>
          <button onClick={addRecipies}>Share Your Recipe</button>
        </div>

        <div className="right d-flex">
          <img src={image_3} height="350px" />
        </div>
      </section>

      <div className="bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff9560"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      {isOpen && (
        <Modal onClose={closeModal}>
          <InputForm />
        </Modal>
      )}

      {/* ↙️ نوصل الفلتر المناسب */}
      <AllRecipes filter={showMine ? "mine" : "all"} />
    </div>
  );
}

export default Home;
