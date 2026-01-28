import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const { cartItems } = useCart();

  const closeMobileDropdown = () => {
    setIsProductOpen(false);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      {/* Navbar container */}
      <nav className="w-full max-w-5xl md:w-full bg-maingreen/90 shadow-lg font-josefin font-bold px-6 py-4 rounded-3xl md:rounded-3xl">

        {/* Top bar: logo + desktop nav + mobile right side */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold text-mainpink">
              <Link to="/" className="hover:text-yellow-800 transition duration-300">
                HASMIN
              </Link>
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 text-mainpink">
            <li className="hover:text-yellow-800 transition duration-400">
              <Link to="/">Home</Link>
            </li>

            {/* Product Dropdown (Desktop) */}
            <li className="relative group hover:text-yellow-800 transition duration-400">
              <Link to="/product">Product</Link>
              <ul className="absolute left-0 mt-2 w-44 bg-pink-50/80 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-mainpink">
                <li className="px-4 py-2 hover:bg-maingreen/40 rounded-t-xl">
                  <Link to="/product">All Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40">
                  <Link to="/shop/croissant">Croissant</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40">
                  <Link to="/shop/tart">Tart</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40">
                  <Link to="/shop/cake">Cake</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40">
                  <Link to="/shop/puff_pastry">Puff Pastry</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40">
                  <Link to="/shop/cookies">Cookies</Link>
                </li>
                <li className="px-4 py-2 hover:bg-maingreen/40 rounded-b-xl">
                  <Link to="/shop/cinnamon">Cinnamon Rolls</Link>
                </li>
              </ul>
            </li>

            <li className="hover:text-yellow-800 transition duration-400">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-yellow-800 transition duration-400">
              <Link to="/contact">Contact</Link>
            </li>

            {/* Cart */}
            <li className="relative hover:text-yellow-800 transition duration-400">
              <Link to="/cart" className="flex items-center">
                <FiShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-yellow-800 text-white text-xs rounded-full px-1.5">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Right Side: Cart + Hamburger */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/cart" className="relative text-mainpink flex items-center">
              <FiShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-800 text-white text-xs rounded-full px-1.5">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button
              className="text-mainpink"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 mx-auto w-11/12 bg-maingreen rounded-2xl shadow-lg px-6 pb-6">
            <ul className="flex flex-col space-y-4 text-mainpink list-none">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>

              {/* Product Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="w-full text-left hover:text-yellow-800 transition duration-400 flex justify-between items-center"
                >
                  Product
                  <span className={`transform transition-transform duration-300 ${isProductOpen ? "rotate-180" : "rotate-0"}`}>
                    ▼
                  </span>
                </button>

                <ul
                  className={`mt-2 ml-4 bg-pink-50/80 rounded-xl shadow-lg text-mainpink overflow-hidden transition-all duration-300 ${
                    isProductOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/product" onClick={closeMobileDropdown}>All Products</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/croissant" onClick={closeMobileDropdown}>Croissant</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/tart" onClick={closeMobileDropdown}>Tart</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/cake" onClick={closeMobileDropdown}>Cake</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/puff_pastry" onClick={closeMobileDropdown}>Puff Pastry</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/cookies" onClick={closeMobileDropdown}>Cookies</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-maingreen/40">
                    <Link to="/shop/cinnamon" onClick={closeMobileDropdown}>Cinnamon Rolls</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
