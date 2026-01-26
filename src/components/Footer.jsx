import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-mainpink text-red-50 py-6 font-josefin">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-red-50">HASMIN</h2>
          <p className="text-red-50 text-sm text-center md:text-left">
            Freshly baked delights delivered with love.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" >
            <FaFacebookF size={18} />
          </a>
          <a href="#" >
            <FaTwitter size={18} />
          </a>
          <a href="#" >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-red-50 text-s text-center md:text-right">
          &copy; {new Date().getFullYear()} HASMIN. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
