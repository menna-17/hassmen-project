import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, updateQuantity, clearCart } = useCart(); // ✅ added clearCart
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* -------------------- HANDLE SUBMIT -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Order placed:", formData, cartItems);

    clearCart();          // ✅ clear the cart
    navigate("/thankyou"); // ✅ go to Thank You page
  };

  /* -------------------- VALIDATION -------------------- */
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full Name is required";
        if (value.trim().length < 3)
          return "Full Name must be at least 3 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
        break;
      case "phone":
        if (!value.trim()) return "Phone is required";
        if (!/^\d{10,11}$/.test(value))
          return "Phone number must be 10–11 digits";
        break;
      case "address":
        if (!value.trim()) return "Address is required";
        break;
      case "area":
        if (!value) return "Please select an area";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const newTouched = {};

    Object.keys(formData).forEach((field) => {
      newTouched[field] = true;
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* -------------------- QUANTITY HANDLERS -------------------- */
  const increaseQty = (item) => updateQuantity(item.id, item.quantity + 1);
  const decreaseQty = (item) => {
    if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
  };

  /* -------------------- INPUT CLASSES -------------------- */
  const inputBase =
    "w-full p-3 bg-transparent rounded text-yellow-800 placeholder-yellow-800 focus:outline-none focus:ring-2";

  const inputClass = (name) =>
    `${inputBase} ${
      errors[name] && touched[name]
        ? "border border-red-500 focus:ring-red-500"
        : "border border-mainpink focus:ring-mainpink"
    }`;

  return (
    <div className="min-h-screen bg-headbg">
      <div className="max-w-6xl mx-auto p-6">
        <div className="py-2 bg-maingreen font-josefin rounded-3xl">
          {/* Header */}
          <div className="flex justify-center mb-4">
            <div className="px-8 py-3 rounded-2xl bg-mainpink">
              <h2 className="text-3xl font-bold text-red-50">Checkout</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
            {/* Order Summary */}
            <div className="md:col-span-2 bg-pink-50 p-6 rounded-2xl shadow h-fit">
              <h3 className="text-xl font-bold text-mainpink mb-4">
                Order Summary
              </h3>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 text-yellow-800"
                  >
                    <span className="flex-1 truncate" title={item.name}>
                      {item.name}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decreaseQty(item)}
                        className="w-7 h-7 rounded-full bg-mainpink text-red-50 hover:bg-maingreen transition duration-300"
                      >
                        −
                      </button>

                      <span className="font-semibold min-w-[20px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQty(item)}
                        className="w-7 h-7 rounded-full bg-mainpink text-red-50 hover:bg-maingreen transition duration-300"
                      >
                        +
                      </button>
                    </div>

                    <span className="w-24 text-right">
                      {(item.price * item.quantity).toFixed(2)}
                      <span className="text-sm">EGP</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <span className="text-xl text-mainpink">Subtotal</span>
                <span className="text-2xl text-mainpink">
                  {subtotal.toFixed(2)}
                  <span className="text-sm">EGP</span>
                </span>
              </div>
            </div>

            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-pink-50 p-6 rounded-2xl shadow space-y-4"
            >
              <h3 className="text-xl font-bold text-mainpink">
                Shipping Details
              </h3>

              {/* Full Name */}
              <div>
                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("fullName")}
                />
                {errors.fullName && touched.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("email")}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("phone")}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("address")}
                />
                {errors.address && touched.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Area */}
              <div>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("area")}
                >
                  <option value="">Select Area</option>
                  <option value="Madinaty">Madinaty</option>
                  <option value="Tagmo3">The 5th Settlement</option>
                  <option value="NasrCity">Nasr City</option>
                </select>
                {errors.area && touched.area && (
                  <p className="text-red-500 text-sm mt-1">{errors.area}</p>
                )}
              </div>

              {/* Notes */}
              <textarea
                name="notes"
                placeholder="Order Notes"
                value={formData.notes}
                onChange={handleChange}
                className={`${inputBase} border border-mainpink`}
              />

              <button
                type="submit"
                className="w-full bg-mainpink text-red-50 py-3 rounded-2xl font-semibold hover:bg-maingreen transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
