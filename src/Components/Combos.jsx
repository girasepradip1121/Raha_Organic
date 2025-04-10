import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c1.jpg",
  },
  {
    id: 2,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c2.jpg",
  },
  {
    id: 3,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c3.jpg",
  },
  {
    id: 4,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c4.jpg",
  },
  {
    id: 5,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c5.jpg",
  },
  {
    id: 6,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 5,
    reviews: 20,
    image: "c6.jpg",
  },
];

const ProductSlider = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // React Router navigation

  const scroll = (direction) => {
    if (scrollRef.current) {
      const productWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 16;
      const visibleCards = 3;
      const scrollAmount = (productWidth + gap) * visibleCards;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 relative">
      <div className="mb-12 flex flex-col md:flex-row items-start justify-between gap-8">
        <h1 className="text-4xl md:text-5xl font-light md:w-[35%] leading-tight">
          Shop Perfect Hair Combos!
        </h1>
        <p className="text-gray-600 text-lg md:w-[55%] leading-relaxed">
          Get stronger, shinier, and healthier hair with our natural Hair
          Shampoo, Hair Oil, and Hair Pack. Nourish your scalp, reduce hair
          fall, and boost growth. Try it today for flawless hair!
        </p>
      </div>

      <div className="relative flex justify-center items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full z-10 hover:bg-gray-100 hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x w-full md:w-[1050px] no-scrollbar md:overflow-hidden justify-start"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[calc(100vw-32px)] md:w-[335px] bg-white border border-gray-300 p-4 snap-start flex-shrink-0"
            >
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₹{product.price}</span>
                <button
                  className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    window.scrollTo(0, 0); // Scroll to top
                    navigate("/cart");
                  }}
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full z-10 hover:bg-gray-100 hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "fill-[#8558B3] text-[#8558B3]" : "text-gray-300"
        }
      />
    ))}
  </div>
);

export default ProductSlider;
