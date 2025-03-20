import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Three() {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterproducts] = useState([]);
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=7");
    const data = await response.json();
    setProducts(data.recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  const getFilterProducts = (country) => {
    const filteredItems = products.filter((product) => product.cuisine === country);
    setFilterproducts(filteredItems);
  };

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  // 🎯 Autoplay Logic
  useEffect(() => {
    if (!embla) return;

    const autoplay = setInterval(() => {
      embla.scrollNext();
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(autoplay); // Cleanup on unmount
  }, [embla]);

  return (
    <div className="relative max-w-full m-auto px-4 py-7 sm:px-4 sm:py-7 md:px-14 md:py-14">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-bold text-[27px] sm:text-[27px] md:text-[39px] tracking-wide">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </h2>
        <p className="text-[16px] sm:text-[16px] md:text-[20px] tracking-wide text-[#6B788E] my-3">
          Browse through a variety of recipes with fresh ingredients selected from the best places.
        </p>
      </div>

      {/* Cuisine Filter Buttons */}
      <div className="flex justify-center gap-4 my-10">
        {["Italian", "Asian", "American"].map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => getFilterProducts(cuisine)}
            className="border border-gray-300 w-24 md:w-32 rounded-full hover:border-gray-700 p-2.5 cursor-pointer font-semibold text-[14px] md:text-[19px]"
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Embla Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {(filterproducts.length > 0 ? filterproducts : products).map((product, index) => (
              <div key={index} className="flex-none w-full md:w-1/3 px-2">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                  <div className="h-40 w-40">
                    <img
                      src={product.image}
                      className="w-full h-full object-cover rounded-full shadow-lg"
                      alt={product.name}
                    />
                  </div>
                  <p className="font-bold text-[18px] mt-5">{product.name}</p>
                  <p className="font-semibold text-[15px] my-3">
                    Calories: <span className="text-[#D95103] text-[23px] font-extrabold">
                      {product.caloriesPerServing}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {products.length === 0 && <div className="text-center text-gray-500">No recipes available.</div>}
    </div>
  );
}

export default Three;
