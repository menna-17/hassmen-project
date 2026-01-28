import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
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

  /* -------------------- HANDLE CHANGE -------------------- */
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Restrict input while typing
    if (name === "fullName") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
      if (value.length > 45) value = value.slice(0, 45);
    }

    if (name === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);
    }

    if (name === "address") {
      if (value.length > 80) value = value.slice(0, 80);
    }

    if (name === "notes") {
      if (value.length > 200) value = value.slice(0, 200);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  /* -------------------- HANDLE BLUR -------------------- */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  /* -------------------- VALIDATION -------------------- */
  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "fullName":
        if (!trimmedValue) return "Name is required";
        if (trimmedValue.length < 3) return "Name must be at least 3 characters";
        if (trimmedValue.length > 45) return "Name cannot exceed 45 characters";
        break;

      case "email":
        if (!trimmedValue) return "Email is required";
        if (/^\d+$/.test(trimmedValue)) return "Email cannot be only digits";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedValue))
          return "Email must be valid";
        break;

      case "phone":
        if (!trimmedValue) return "Phone number is required";
        if (!/^(010|011|012|015)\d{8}$/.test(trimmedValue))
          return "Phone must start with 010, 011, 012, or 015 and be 11 digits";
        break;

      case "address":
        if (!trimmedValue) return "Address is required";
        if (trimmedValue.length < 7) return "Address must be at least 7 characters";
        if (trimmedValue.length > 80) return "Address cannot exceed 80 characters";
        if (/^\d+$/.test(trimmedValue)) return "Address cannot be only digits";
        break;

      case "area":
        if (!value) return "Please select an area";
        break;

      case "notes":
        if (trimmedValue.length > 100) return "Notes cannot exceed 100 characters";
        if (/^\d+$/.test(trimmedValue)) return "Notes cannot be only digits";
        break;

      default:
        return "";
    }

    return "";
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

  /* -------------------- HANDLE SUBMIT -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm() || cartItems.length === 0) return;

    console.log("Order placed:", formData, cartItems);

    clearCart();
    navigate("/thankyou");
  };

  /* -------------------- INPUT CLASSES -------------------- */
  const inputBase =
    "w-full p-3 bg-transparent rounded-xl text-yellow-800 placeholder-yellow-800 focus:outline-none focus:ring-2";

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

              {cartItems.length === 0 ? (
                <p className="text-yellow-800 font-semibold">Your cart is empty</p>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center text-yellow-800 border-b border-mainpink pb-2 last:border-b-0"
                    >
                      <span
                        className="flex-1 font-semibold truncate"
                        title={item.name}
                      >
                        <span className="hidden sm:inline">{item.name}</span>
                        <span className="sm:hidden">
                          {item.name.split(" ")[0]}{" "}
                          {item.name.split(" ")[1]?.slice(0, 2)}…
                        </span>
                        <span className="ml-1 font-normal whitespace-nowrap">
                          x {item.quantity}
                        </span>
                      </span>

                      <span className="font-semibold whitespace-nowrap">
                        {(item.price * item.quantity).toFixed(2)}
                        <span className="ml-1 text-sm">EGP</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-mainpink mt-4 pt-4 flex justify-between font-bold">
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

              <input
                name="fullName"
                placeholder="Name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("fullName")}
              />
              {errors.fullName && touched.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("email")}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("phone")}
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("address")}
              />
              {errors.address && touched.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}

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
                <p className="text-red-500 text-sm">{errors.area}</p>
              )}

              <textarea
                name="notes"
                placeholder="Order Notes"
                value={formData.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} border border-mainpink`}
              />
              {errors.notes && touched.notes && (
                <p className="text-red-500 text-sm">{errors.notes}</p>
              )}

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={cartItems.length === 0}
                className={`w-full py-3 rounded-2xl font-semibold transition duration-300 ${
                  cartItems.length === 0
                    ? "bg-mainpink/40 text-red-50 cursor-not-allowed"
                    : "bg-mainpink text-red-50 hover:bg-maingreen"
                }`}
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
