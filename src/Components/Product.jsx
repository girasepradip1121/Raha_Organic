"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Product = () => {
  const navigate = useNavigate(); // ✅ Now useNavigate is properly defined

  // Sample product images
  const productImages = [
    "/productpage.svg",
    "/product1.svg",
    "/item.svg",
    "/item1.svg",
  ];

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(0);

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-6">
      {/* Left Section - Product Image */}
      <div className="w-full md:w-1/2">
        {/* Main Image Container */}
        <div className=" overflow-hidden w-80 h-80 flex items-center justify-center">
          <img
            src={productImages[selectedImage]} // ✅ Dynamically change image on click
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Thumbnails Row - Outside and Below Main Image */}
        <div className="flex justify-start gap-2 mt-4 w-full overflow-x-auto">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`w-24 h-24 overflow-hidden flex-shrink-0 cursor-pointer border-2 ${
                selectedImage === index
                  ? "border-purple-600"
                  : "border-gray-200"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full md:w-1/2">
        <div className="border border-gray-200 p-6">
          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-600">4.8 (41)</span>
          </div>

          {/* Product Title */}
          <h2 className="text-2xl font-semibold mb-6 text-purple-700">
            Top-Selling Hair Essential!
          </h2>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 ">
              -50%
            </div>
            <span className="text-purple-700 text-2xl font-semibold">₹980</span>
          </div>

          {/* Original Price */}
          <div className="flex gap-4 mb-4 text-sm text-gray-500">
            <span>M.R.P: ₹2000</span>
            <span>Inclusive of all taxes</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-8">
            "Sara And I Absolutely Loved Our Stay At Motel Mirambeena! The
            Swimming Pool Was A Great Way To Unwind, The Dinner Was Fantastic,
            And The Rooms Were The Best We've Experienced."
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/checkoutpage")}
              className="bg-purple-600 text-white py-3 px-4 hover:bg-purple-700 w-full"
            >
              Buy Now
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-purple-200 text-purple-700 py-3 px-4 hover:bg-purple-300 w-full flex items-center justify-center"
            >
              Add Cart <ShoppingCart className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
