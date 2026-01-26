import React, { useState } from "react";
import { data } from "../assets/data";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = data.products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo(0, 0);
  };

  const handlePageNumber = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen px-6 py-12 font-josefin">
      {/* Page Heading */}
      <div className="flex justify-center mb-10">
        <div className="inline-block px-8 py-3 rounded-2xl bg-mainpink">
          <h1 className="text-3xl font-bold text-center text-red-50">
            All Products
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-mainpink/50 text-red-50 cursor-not-allowed"
              : "bg-mainpink text-red-50"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageNumber(page)}
            className={`px-4 py-2 rounded-lg ${
              page === currentPage
                ? "bg-mainpink text-red-50"
                : "bg-maingreen hover:bg-mainpink text-red-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-mainpink/50 text-red-50 cursor-not-allowed"
              : "bg-mainpink text-red-50"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
