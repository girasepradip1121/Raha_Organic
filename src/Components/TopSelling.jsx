import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProductCard from "./ProductCard"; // Importing ProductCard component

const products = [
  {
    id: 1,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 4,
    reviews: 20,
    image: "home1.jpg",
  },
  {
    id: 2,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 4,
    reviews: 20,
    image: "home2.jpg",
  },
  {
    id: 3,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 4,
    reviews: 20,
    image: "home3.jpg",
  },
  {
    id: 4,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 4,
    reviews: 20,
    image: "home4.jpg",
  },
  {
    id: 5,
    title: "Top-Selling Hair Essential!",
    price: 120.99,
    rating: 4,
    reviews: 20,
    image: "home1.jpg",
  },
];

const TopSeller = () => {
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
    window.scrollTo(0, 0); // Scroll to top
    navigate("/cart"); // Navigate to CartPage on add to cart
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      {/* Title & Description */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 flex flex-col md:flex-row items-start justify-start gap-4 sm:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light md:w-[35%] leading-tight">
          Top-Selling Hair Essential!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:w-[55%] leading-relaxed">
          Get stronger, shinier, and healthier hair with our natural Hair
          Shampoo, Hair Oil, and Hair Pack. Nourish your scalp, reduce hair
          fall, and boost growth. Try it today for flawless hair!
        </p>
      </div>

      {/* Mobile Horizontal Scroll View */}
      <div className="md:hidden">
        <div className="overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            {products.map((product) => (
              <div key={product.id} className="w-64">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid Layout - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showAll ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <>
              <div className="flex items-center justify-center">
                <ProductCard product={products[0]} addToCart={addToCart} />
              </div>
              <div className="flex flex-col gap-6">
                <ProductCard product={products[1]} addToCart={addToCart} />
                <ProductCard product={products[2]} addToCart={addToCart} />
              </div>
              <div
                onClick={() => setShowAll(true)}
                className="bg-white p-6 border border-[#DCDCDC] flex flex-col items-center justify-center aspect-square cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <span>View All</span>
                  <ChevronRight size={24} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
