import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const { cartItems } = useCart();

  // closes mobile dropdown + menu
  const closeMobileDropdown = () => {
    setIsProductOpen(false);
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="mx-auto max-w-5xl lg:rounded-3xl md:w-full md:rounded-none bg-maingreen/90 shadow-lg font-josefin font-bold px-8 py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">

          {/* Logo */}
          <div className="mb-4 md:mb-0">
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

            {/* Product Dropdown (Desktop - FIXED) */}
            <li className="relative group hover:text-yellow-800 transition duration-400">
              <Link to="/product">Product</Link>

              <ul
                className="
                  absolute left-0 mt-2 w-44
                  bg-pink-50/80 rounded-xl shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                  z-50 text-mainpink
                "
              >
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

          {/* Mobile Menu Button (UNCHANGED) */}
          <button
            className="md:hidden text-mainpink mt-2"
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
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Mobile Menu (100% SAME AS YOUR ORIGINAL) */}
          {isOpen && (
            <div className="md:hidden px-6 pb-6 w-full">
              <ul className="flex flex-col space-y-4 text-mainpink list-none">

                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>

                {/* Product Dropdown (Mobile Click) */}
                <li>
                  <button
                    onClick={() => setIsProductOpen(!isProductOpen)}
                    className="w-full text-left hover:text-yellow-800 transition duration-400"
                  >
                    Product
                  </button>

                  {isProductOpen && (
                    <ul className="mt-2 ml-4 bg-pink-50/80 rounded-xl shadow-lg text-mainpink">
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/product" onClick={closeMobileDropdown}>
                          All Products
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/croissant" onClick={closeMobileDropdown}>
                          Croissant
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/tart" onClick={closeMobileDropdown}>
                          Tart
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/cake" onClick={closeMobileDropdown}>
                          Cake
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/puff_pastry" onClick={closeMobileDropdown}>
                          Puff Pastry
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/cookies" onClick={closeMobileDropdown}>
                          Cookies
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-maingreen/40">
                        <Link to="/shop/cinnamon" onClick={closeMobileDropdown}>
                          Cinnamon Rolls
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
                <li>
                  <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                    <FiShoppingCart size={18} />
                    <span>{cartItems.length}</span>
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
