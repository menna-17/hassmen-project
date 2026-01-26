import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { data } from "../assets/data";
import ProductCard from "../components/ProductCard";

const ShopByCategory = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filteredProducts = data.products.filter(
    (product) => product.category === category
  );

  return (
    <div className="min-h-screen px-6 py-12 font-josefin">
      {/* Page Title */}
      <div className="flex justify-center mb-10">
        <div className="inline-block px-8 py-2 rounded-2xl bg-mainpink">
          <h1 className="text-3xl font-bold text-center text-red-50 capitalize">
            {category.replace("_", " ")}
          </h1>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
