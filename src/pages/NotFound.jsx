import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen  w-full flex items-center justify-center px-4 sm:px-8 py-8">
      <div className="bg-maingreen w-full max-w-3xl rounded-4xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col items-center justify-center text-center">

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-mainpink mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-yellow-800 max-w-md mb-8 text-sm sm:text-base">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="bg-mainpink text-pink-50 px-6 py-3 rounded-full font-semibold hover:bg-yellow-800 transition duration-300"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}
