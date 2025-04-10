import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya S",
    rating: 4,
    text: "I was struggling with hair fall and dryness, but after using this shampoo, oil, and hair pack, my hair feels stronger and shinier! Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rohan M.",
    rating: 4,
    text: "Amazing combo! The hair oil nourishes my scalp, the shampoo cleanses gently, and the hair pack gives my hair a healthy shine. Love the results!",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 3,
    name: "Ananya K.",
    rating: 4,
    text: "Finally found the perfect hair care solution! My hair feels soft, smooth, and manageable. The natural ingredients make a real difference. Will definitely buy again!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1 text-[#8558B3]">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-[#8558B3]" : "text-gray-300"}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white border border-gray-300 p-6 min-w-full transition-transform hover:scale-105">
    <div className="flex items-center gap-3 mb-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-12 h-12 rounded-full border"
      />
      <div>
        <h4 className="font-semibold text-lg">{review.name}</h4>
        <StarRating rating={review.rating} />
      </div>
    </div>
    <p className="text-gray-600">{review.text}</p>
  </div>
);

const Review = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollRef.current.clientWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title & Description */}
      <div className="mb-12 flex flex-col md:flex-row items-start justify-between gap-8">
        <h1 className="text-4xl md:text-5xl font-light md:w-[35%] leading-tight">
          See What Customers Say!
        </h1>
        <p className="text-gray-600 text-lg md:w-[55%] leading-relaxed">
          See what customers say about our best-selling hair care products! Real
          reviews, real results – experience stronger, shinier, and healthier
          hair with our shampoo, oil, and hair pack. Try it today!
        </p>
      </div>

      {/* Review Slider (Mobile) & Grid (Desktop) */}
      <div className="md:hidden overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Review Grid (Desktop) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
