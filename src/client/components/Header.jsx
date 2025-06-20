import React, { useState } from "react";
import { FiMenu, FiX, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import logo from '../../Admin/images/logo.jpg'

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow-sm sticky top-0 bg-white z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-6">
        <img src={logo} alt="" />

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/ecom">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5 text-xl">
            <FiUser
              className="cursor-pointer"
              onClick={() => navigate("/userprofile")}
            />
            <FiHeart
              className="cursor-pointer"
              onClick={() => navigate("/favourites")}
            />
            <FiShoppingCart
              className="cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2 text-sm">
            <a href="/ecom" className="block">
              Home
            </a>
            <a href="/shop" className="block">
              Shop
            </a>
            <a href="/about" className="block">
              About
            </a>
            <a href="/contact" className="block">
              Contact
            </a>
            <div className="flex gap-4 pt-2 text-xl">
              <FiUser />
              <FiHeart />
              <FiShoppingCart onClick={() => setCartOpen(true)} />
            </div>
          </div>
        )}
      </header>

      {/* Show Cart Component */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Header;
