import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Categories() {
  const { categories } = useContext(AppContext);

  // NAYA: Sirf un categories ko lo jinka status "active" hai
  const activeCategories = categories.filter(cat => cat.status === "active");

  return (
    <div className="w-full py-5">
      {/* Heading */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-lg text-gray-600">
          Our Directory Categories
        </h2>
        <p className="mt-2 mb-20 text-3xl font-bold text-gray-900">
          Smart Home Services in Your City
        </p>
      </div>

      {/* Categories Slider */}
      <div className="overflow-hidden w-full">
        {activeCategories.length > 0 ? (
          <div className="flex w-max gap-10 animate-scroll hover:[animation-play-state:paused]">
            {/* Yahan ab categories ki jagah activeCategories map hoga */}
            {[...activeCategories, ...activeCategories].map((item, index) => (
              <Link
                key={index}
                to={`/subcategory/${item.name}`}
                className="group w-[170px] shrink-0 text-center cursor-pointer"
              >
                <div className="w-[170px] h-[170px] overflow-hidden rounded-full bg-gray-100 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h4 className="mt-4 font-semibold text-gray-800 group-hover:text-green-600 transition">{item.name}</h4>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No active categories available right now.
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;