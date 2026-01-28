import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ---------------- Validation functions ----------------
  const validateName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Name is required";
    if (trimmed.length < 3) return "Name must be at least 3 characters";
    if (trimmed.length > 45) return "Name cannot exceed 45 characters";
    return "";
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Email is required";
    if (/^\d+$/.test(trimmed)) return "Email cannot be only digits";

    // ✅ Updated realistic Gmail/Yahoo validation
    if (
      !/^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@(gmail\.com|googlemail\.com|yahoo\.com|yahoo\.co\.uk)$/i.test(trimmed)
    ) {
      return "Email must be a valid Gmail or Yahoo address";
    }

    return "";
  };

  const validateMessage = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Message is required";
    if (trimmed.length < 10) return "Message must be at least 10 characters";
    if (trimmed.length > 200) return "Message cannot exceed 200 characters";
    if (/^\d+$/.test(trimmed)) return "Message cannot be only digits";
    return "";
  };

  // ---------------- Handle input change ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Filter name input to allow only letters and spaces, max 45 chars
    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
      if (newValue.length > 45) newValue = newValue.slice(0, 45);
    }

    // Limit message to 200 chars
    if (name === "message" && newValue.length > 200) {
      newValue = newValue.slice(0, 200);
    }

    // Limit email to 100 chars
    if (name === "email" && newValue.length > 100) {
      newValue = newValue.slice(0, 100);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Live validation
    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "name"
          ? validateName(newValue)
          : name === "email"
          ? validateEmail(newValue)
          : validateMessage(newValue),
    }));
  };

  // ---------------- Handle submit ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Message submitted:", formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen lg:pt-2 flex items-center justify-center px-4 font-josefin pt-20 mb-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left Section */}
        <div className="bg-maingreen text-mainpink p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p>
            Have a question, feedback, or need any help? The Hasmin team is here
            for you! Send us a message and we’ll respond as soon as we can.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-yellow-800 text-lg" />
              <span>Craft Zone Madinaty, Cairo</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-yellow-800 text-lg" />
              <span>support@hasmin.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-yellow-800 text-lg" />
              <span>1977</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-pink-50">
          <h3 className="text-2xl font-semibold mb-6 text-mainpink">
            Contact Us
          </h3>

          {submitted ? (
            <div className="bg-mainpink text-pink-50 p-4 rounded-2xl">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-mainpink">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`mt-1 w-full rounded-lg border border-mainpink px-4 py-2
                    placeholder:text-yellow-800
                    focus:ring-2 focus:outline-none ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-mainpink"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-mainpink">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`mt-1 w-full rounded-lg border border-mainpink px-4 py-2
                    placeholder:text-yellow-800
                    focus:ring-2 focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-mainpink"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-mainpink">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`mt-1 w-full rounded-lg border border-mainpink px-4 py-2
                    placeholder:text-yellow-800
                    focus:ring-2 focus:outline-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-mainpink"
                    }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-mainpink text-pink-50 py-2 rounded-lg hover:bg-maingreen transition duration-400"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
