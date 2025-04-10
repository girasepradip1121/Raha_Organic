"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCartMessage from "./EmptyCartMessage";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Cart() {
  const navigate = useNavigate(); // Initialize navigate function

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Revitalizing Hair Serum",
      description: "Size: 100ml",
      price: 120.0,
      quantity: 1,
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Revitalizing Hair Serum",
      description: "Size: 100ml",
      price: 120.0,
      quantity: 1,
      image: "/product2.jpg",
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(20.0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Recalculate totals whenever cartItems change
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTax(newSubtotal * 0.05); // 5% tax
    setTotal(newSubtotal + shipping + newSubtotal * 0.05);
  }, [cartItems]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-light mb-8">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1">
            {/* Cart header */}
            <div className="hidden sm:flex justify-between items-center border-b pb-4 mb-4 font-medium text-sm border-gray-300">
              <div className="w-1/5">Product</div>
              <div className="w-1/5">Description</div>
              <div className="w-1/5">Quantity</div>
              <div className="w-1/5">Price</div>
              <div className="w-1/5">Total</div>
              <div className="w-1/5">Actions</div>
            </div>

            {/* Cart items */}
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>

            {/* Continue shopping button */}
            <div className="mt-8">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/allproducts");
                }}
                className="flex items-center text-sm font-medium border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:w-1/3">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
}
