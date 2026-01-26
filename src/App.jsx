import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import ShopByCategory from "./pages/ShopByCateogry";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from "./pages/ThankYouPage ";

function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <Routes>
          {/* Routes WITH Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop/:category" element={<ShopByCategory />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            
          </Route>

          {/* Route WITHOUT Navbar & Footer */}
          <Route path="/checkout" element={<CheckoutPage />} />
           <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
