import React from "react";
import { useNavigate } from "react-router-dom";


const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-headbg flex items-center justify-center p-6 font-josefin">
      {/* Outer container: keep desktop layout */}
      <div className="flex flex-col md:flex-row bg-maingreen rounded-3xl shadow-lg overflow-hidden w-full max-w-6xl h-auto md:h-80">
        
        {/* Left side: Text */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center items-start bg-pink-50 rounded-3xl md:rounded-r-none md:rounded-l-3xl">
          <h1 className="text-4xl font-bold mb-4 text-mainpink">Thank You!</h1>
          <p className="mb-6 text-yellow-800">
            Hooray ! Your order is on its way ! 
            Thank you for choosing HASMIN Bakery, where every bite is a little piece of happiness.  
            We hope it makes your day even sweeter, and we can’t wait to see you at our branches soon!
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-mainpink text-red-50 rounded-2xl font-semibold hover:bg-maingreen transition"
          >
            Back to Home
          </button>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-full">
          <img
            src="finn.png"
            alt="Thank You"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
