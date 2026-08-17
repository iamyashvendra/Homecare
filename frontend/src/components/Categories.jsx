import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Categories() {
  const { categories } = useContext(AppContext);
  const activeCategories = categories.filter(cat => cat.status === "active");

  // NAYA: Auto-scroll aur swipe handle karne ke liye variables
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationFrameId;

    // Ye function slider ko dheere-dheere aage badhayega
    const scroll = () => {
      if (!isInteracting) {
        slider.scrollLeft += 1; // Scrolling ki speed (is number ko badha kar speed fast kar sakte ho)

        // Jab aadhi width cross ho jaye, toh chupke se wapas start me bhej do (Infinite loop)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Clean up function
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]); // Jab finger touch hogi tab state change hogi

  return (
    <div className="w-full py-5 px-4 sm:px-0">
      {/* Heading */}
      <div className="text-center mt-10 md:mt-16 mb-6 md:mb-8">
        <h2 className="text-base sm:text-lg text-gray-600">
          Our Directory Categories
        </h2>
        <p className="mt-2 mb-10 md:mb-20 text-2xl sm:text-3xl font-bold text-gray-900">
          Smart Home Services in Your City
        </p>
      </div>

      {/* Categories Swipeable + Auto-scroll Container */}
      <div className="w-full relative">
        {activeCategories.length > 0 ? (
          <div 
            ref={scrollRef}
            className="flex gap-6 sm:gap-10 overflow-x-auto custom-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            // Jab mouse ya finger touch ho, toh auto-scroll rok do
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
          >
            {/* Scrollbar hide karne ke liye inline CSS */}
            <style>
              {`
                .custom-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {/* Loop banaye rakhne ke liye categories ko 2 baar lagaya hai */}
            {[...activeCategories, ...activeCategories].map((item, index) => (
              <Link
                key={index}
                to={`/subcategory/${item.name}`}
                className="shrink-0 group w-[120px] sm:w-[140px] md:w-[170px] text-center cursor-pointer"
              >
                <div className="mx-auto w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] overflow-hidden rounded-full bg-gray-100 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h4 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-green-600 transition px-2 line-clamp-2">
                  {item.name}
                </h4>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10 text-sm sm:text-base">
            No active categories available right now.
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;