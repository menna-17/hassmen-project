import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-full max-w-sm overflow-hidden bg-maingreen rounded-2xl shadow-md hover:shadow-xl transition">
      {/* Product Image */}
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      {/* Product Info */}
      <div className="p-6 flex flex-col justify-between min-h-[150px]">
        <div>
          <h3 className="text-xl font-bold mb-2 text-mainpink">
            {product.name}
          </h3>

          <p className="text-md text-yellow-800">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-mainpink">
            {product.price}<span className="text-sm ">EGP</span>
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-6 py-2 text-md font-medium text-red-50 bg-mainpink rounded-xl hover:bg-yellow-800 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
