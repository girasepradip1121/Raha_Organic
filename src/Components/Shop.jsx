"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Product",
  "Hair Shampoo",
  "Hair Oil",
  "Hair Pack",
  "Best Combs",
];

const products = [
  {
    id: 1,
    name: "Top-Selling Hair Essential!",
    rating: 5,
    reviews: 20,
    price: 120.99,
    image: "t1.jpg",
    category: "Hair Shampoo",
  },
  {
    id: 2,
    name: "Top-Selling Hair Essential!",
    rating: 4,
    reviews: 20,
    price: 120.99,
    image: "t2.jpg",
    category: "Hair Shampoo",
  },
  {
    id: 3,
    name: "Nourishing Hair Oil",
    rating: 5,
    reviews: 15,
    price: 99.99,
    image: "t5.jpg",
    category: "Hair Oil",
  },
  {
    id: 4,
    name: "Revitalizing Hair Pack",
    rating: 4,
    reviews: 12,
    price: 149.99,
    image: "c1.jpg",
    category: "Hair Pack",
  },
  {
    id: 5,
    name: "Premium Wooden Combo",
    rating: 5,
    reviews: 8,
    price: 79.99,
    image: "c2.jpg",
    category: "Best Combs",
  },
  {
    id: 6,
    name: "Coconut Hair Oil",
    rating: 4,
    reviews: 18,
    price: 89.99,
    image: "t6.jpg",
    category: "Hair Oil",
  },
];

// Product Card Component
function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="w-full bg-white border border-gray-200 p-5 rounded-sm cursor-pointer"
      onClick={handleProductClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md"
      />
      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>

      {/* Star Ratings */}
      <div className="flex items-center mt-2 text-[#8558B3]">
        {Array.from({ length: product.rating }, (_, index) => (
          <span key={index} className="text-lg">
            ★
          </span>
        ))}
        {Array.from({ length: 5 - product.rating }, (_, index) => (
          <span key={index} className="text-lg text-gray-300">
            ★
          </span>
        ))}
        <span className="text-gray-600 ml-2 text-sm">({product.reviews})</span>
      </div>

      {/* Price and Add to Cart */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-gray-900">
          ₹{product.price.toFixed(2)}
        </p>
        <button
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            window.scrollTo(0, 0); // Scroll to top
            navigate("/cart");
          }}
        >
          Add Cart
        </button>
      </div>
    </div>
  );
}

export default function ShopProduct() {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  const filteredProducts =
    selectedCategory === "All Product"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container px-8 sm:px-6 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-light mb-8 text-center md:text-left">
        Shop Product
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar for Categories */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-200 font-medium text-lg">
              Category
            </div>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer p-4 transition-colors text-center md:text-left ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white font-semibold"
                      : "bg-gray-50 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Display Section */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
