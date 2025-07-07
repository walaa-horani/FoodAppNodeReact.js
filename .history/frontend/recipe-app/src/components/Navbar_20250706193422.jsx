// Navbar.jsx
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { HiMenu, HiX } from "react-icons/hi"; // أيقونتا الهامبرغر والإغلاق

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);               // للمودال
  const [menuOpen, setMenuOpen] = useState(false);           // لقائمة الجوال
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  // اعكس قيمة isLogin عند تغيّر التوكنات
  useEffect(() => {
    const handleStorage = () => setIsLogin(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleAuth = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false);
    } else {
      setIsOpen(true); // أظهر مودال تسجيل الدخول
    }
  };

  const protect = (e) => {
    if (!isLogin) {
      e.preventDefault();
      setIsOpen(true);
    }
    setMenuOpen(false); // أغلِق القائمة بعد الاختيار
  };

  return (
    <>
      <header className="shadow-md fixed w-full z-50 bg-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl">Recipes</span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Links */}
          <ul
            className={`
              flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8
              absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent
              transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-y-0" : "-translate-y-[120%] lg:translate-y-0"}
            `}
          >
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href={isLogin ? "/myRecipes" : "/"} onClick={protect}>My Recipes</a></li>
            <li><a href={isLogin ? "/myFavRecipes" : "/"} onClick={protect}>My Favourites</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

            {/* Login / Logout */}
            <li>
              <button
                className="py-1 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                onClick={() => {
                  setMenuOpen(false);
                  toggleAuth();
                }}
              >
                {isLogin ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {isOpen && <Modal onClose={() => setIsOpen(false)}><InputForm /></Modal>}
    </>
  );
}
