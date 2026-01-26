import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Handle decrement
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.id); // remove item if quantity is 1
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  // Handle increment
  const handleIncrement = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-josefin ">
      <div className="flex justify-center mb-8">
        <div className="lg:px-8 lg:py-3 rounded-2xl bg-mainpink px-4 py-2 ">
          <h2 className="text-3xl font-bold text-red-50 text-center">
            Your Shopping Cart
          </h2>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-yellow-800 text-2xl">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-maingreen py-4"
              >
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-mainpink">
                      {item.name}
                    </h3>
                    <p className="text-yellow-800 text-md">
                      {item.price.toFixed(2)}
                      <span className="text-xs">EGP</span>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleDecrement(item)}
                    className="w-7 h-7 rounded-full bg-mainpink text-red-50 hover:bg-maingreen transition duration-300"
                  >
                    −
                  </button>

                  <span className="font-semibold min-w-[20px]  text-yellow-800 ext-center px-2">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleIncrement(item)}
                    className="w-7 h-7 rounded-full bg-mainpink text-red-50 hover:bg-maingreen transition duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex justify-end items-center space-x-6">
            <div className="text-right">
              <p className="text-2xl text-mainpink font-bold">
                Subtotal:{" "}
                <span className="font-bold text-2xl text-yellow-800 ">
                  {subtotal.toFixed(2)}
                  <span className="text-sm">EGP</span>
                </span>
              </p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-mainpink hover:bg-maingreen transition duration-300 text-red-50 lg:px-6 lg:py-3 px-4 py-2 rounded-2xl font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
