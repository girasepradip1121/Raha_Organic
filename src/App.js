import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import AllproductPage from "./Pages/AllproductPage";
import BestsellerPage from "./Pages/BestsellerPage";
import AboutPage from "./Pages/AboutPage";
import ContactusPage from "./Pages/ContactusPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import LoginPage from "./Components/Login";

import SignupPage from "./Components/Sign";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/allproducts" element={<AllproductPage />} />
        <Route path="/bestseller" element={<BestsellerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Sign" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
