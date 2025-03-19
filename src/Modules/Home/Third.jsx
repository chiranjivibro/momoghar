import React, { useEffect, useState  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sbutton from "../../Components/Sbutton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute w-7 sm:w-7 md:w-10 h-7 sm:h-7 md:h-10  top-1/2 right-[5px] transform -translate-y-1/2 z-10 cursor-pointer bg-white border-[1px] border-[#DFE2E6] focus:outline-0 rounded-[50%] p-1 hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] leading-4 sm:leading-4 md:leading-7 text-center align-middle"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-[14px] text-[#a6a7a8]" />
      </div>
    );
  };
  
  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute w-7 sm:w-7 md:w-10 h-7 sm:h-7 md:h-10 top-1/2 left-[5px] transform -translate-y-1/2 z-10 cursor-pointer bg-white border-[1px] border-[#DFE2E6] focus:outline-0 rounded-[50%] p-1 hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] leading-4 sm:leading-4 md:leading-7  text-center align-middle"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-[14px] text-[#a6a7a8]" />
      </div>
    );
  };

function Third() {
    const [products, setProducts] = useState([]);
    const [filterproducts, setFilterproducts] = useState([]);
    const getData = async () => {
        const response = await fetch("https://dummyjson.com/recipes?limit=7");
        const data = await response.json();
        console.log(data);
        setProducts(data.recipes);
    };
        useEffect(() => {
        getData();
        }, []);

    const getFilterProducts = (country) => {
        const filterItem = products.filter((product) => {
            return product.cuisine === country;
        });
        setFilterproducts(filterItem);
    };

 // Slider settings with custom arrows
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
        <div className="w-[100%] m-auto block px-4 py-7 sm:px-4 sm:py-7 md:px-14 md:py-14 overflow-x-hidden">

        <div className="flex flex-col items-center">

        <div>
            <h2 className="font-primary-head font-bold text-[27px] sm:text-[27px] md:text-[39px] tracking-wide text-center">
                Our <span className="text-[#D95103]">Most Popular</span> Recipes</h2>
            <p className="font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[20px] tracking-wide text-center text-[#6B788E] my-3">
                Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
        </div>

        {/* Cuisine Filter Buttons */}
        <div className="flex gap-x-3 sm:gap-x-3 md:gap-x-4  my-7">

            <button 
            onClick={() => {
                getFilterProducts("Italian");
            }} className="border-[1px] border-[#F3F4F6] w-20 sm:w-20 md:w-32 rounded-full hover:border-[#2A313F] p-2.5 cursor-pointer overflow-hidden
            font-primary-head font-semibold text-[12px] sm:text-[12px] md:text-[19px]"
            >Italian</button>

            <button
            onClick={() => {
                getFilterProducts("Asian");
            }} className="border-[1px] border-[#F3F4F6] w-20 sm:w-20 md:w-32 rounded-full hover:border-[#2A313F] p-2.5 cursor-pointer overflow-hidden
            font-primary-head font-semibold text-[12px] sm:text-[12px] md:text-[19px]"
            >Asian</button>

            <button
            onClick={() => {
                getFilterProducts("American");
            }} className="border-[1px] border-[#F3F4F6] w-20 sm:w-20 md:w-32 rounded-full hover:border-[#2A313F] p-2.5 cursor-pointer overflow-hidden
            font-primary-head font-semibold text-[12px] sm:text-[12px] md:text-[19px]"
            >American</button>

        </div>

        {/* Recipe Slider Section */}
        <div className="w-[100%] flex flex-row flex-wrap gap-5 mt-1 sm:mt-1 md:mt-10 py-2 justify-center overflow-x-hidden">
        {filterproducts.length > 0 ? (
          <Slider {...settings}
          nextArrow={<NextArrow />}
  prevArrow={<PrevArrow />}>
            {filterproducts.map((product, index) => (
              <div
                key={index}
                className="slide-item flex flex-col items-center justify-center w-64 h-auto p-4 font-primary-head text-center"
              >
                <div className="flex items-center justify-center h-40 w-full">
                  <img
                    src={product.image}
                    className="h-38 w-38 rounded-[50%] shadow-[0px_7px_20px_5px_rgba(0,_0,_0,_0.1)]"
                    alt={product.name}
                  />
                </div>
                <p className="font-bold text-[18px]">{product.name}</p>
                <p className="font-semibold text-[15px]">Rs. <span className="text-[#D95103] text-[23px]"> {product.caloriesPerServing}</span></p>
              </div>
            ))}
          </Slider>
        ) : products.length > 0 ? (
            <Slider {...settings}
            nextArrow={<NextArrow />}
  prevArrow={<PrevArrow />}>
                {
                 products.map((product, index) => (
                    <div
                    key={index}
                    className="slide-item flex flex-col items-center justify-center w-64 h-auto p-4 font-primary-head text-center"
                  >
                    <div className="flex items-center justify-center h-40 w-full">
                      <img
                        src={product.image}
                        className="h-38 w-38 rounded-[50%] shadow-[0px_7px_20px_5px_rgba(0,_0,_0,_0.1)]"
                        alt={product.name}
                      />
                    </div>
                    <p className="font-bold text-[18px] mt-5">{product.name}</p>
                    <p className="font-semibold text-[15px] my-3">Rs. <span className="text-[#D95103] text-[23px] font-extrabold"> {product.caloriesPerServing}</span></p>
                  </div>
                 ))   
                }
            </Slider>
        
        
        ) : (
          <div className="text-center text-gray-500">No recipes available.</div>
        )}
        </div>
        <Sbutton title="Explore Our Menu"/>   
        </div>

        </div>
        </>
    );
}
export default Third