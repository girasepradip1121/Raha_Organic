"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Star } from "lucide-react";
import PropTypes from "prop-types";

// Sample item data
const items = [
  {
    id: 1,
    title: "Top-Selling Hair Essential!",
    image: "t1.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
  {
    id: 2,
    title: "Top-Selling Hair Essential!",
    image: "t2.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
  {
    id: 3,
    title: "Top-Selling Hair Essential!",
    image: "t3.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
  {
    id: 4,
    title: "Top-Selling Hair Essential!",
    image: "t4.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
  {
    id: 5,
    title: "Top-Selling Hair Essential!",
    image: "t5.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
  {
    id: 6,
    title: "Top-Selling Hair Essential!",
    image: "t6.jpg",
    rating: 4,
    reviews: 20,
    price: 120.99,
  },
];

export default function ItemListing() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.title} to cart!`);
  };

  return (
    <div className="container px-8 py-8">
      <h1 className="text-3xl font-serif mb-6">All Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ item, onAddToCart }) {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div
      className="border border-gray-200 p-4 rounded-sm cursor-pointer"
      onClick={() => navigate(`/product/${item.id}`)} // Navigate when card is clicked
    >
      <div className="mb-3">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="text-base font-medium mb-2">{item.title}</h2>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < item.rating
                ? "fill-purple-600 text-purple-600"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium">₹{item.price.toFixed(2)}</span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking "Add Cart"
            onAddToCart();
            window.scrollTo(0, 0); // Scroll to top
            navigate("/cart"); // Navigate to cart page
          }}
          className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
}

// Add PropTypes validation for JavaScript
ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
