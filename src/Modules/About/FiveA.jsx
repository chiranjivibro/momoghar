import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hchefs from '../../assets/Hchefs.png';
import Asschefs from '../../assets/Asschefs.png';
import Asschefsa from '../../assets/Asschefsa.png';

const teamMembers = [
    {
      name: "Head Chef",
      image: Hchefs,
    },
    {
      name: "Assistant Chef",
      image: Asschefs,
    },
    {
      name: "Assistant Chef",
      image: Asschefsa,
    },
  ];


function FiveA() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

    return(
        <>
        <div className='w-[100%] m-auto px-4 sm:px-4 md:px-14 pt-7 sm:pt-7 md:pt-14 pb-20 overflow-hidden'>
        <div className="max-w-5xl w-full mx-auto py-0 sm:py-0 md:py-14 px-0 sm:px-0 md:px-4">
            <h2 className="font-primary-head font-bold tracking-wider text-[29px] sm:text-[29px] md:text-[49px] text-center mb-4 sm:mb-4 md:mb-0">
                Meet The <span className="text-[#D95103]">Team</span>
            </h2>
      <p className="font-primary-head font-semibold text-[18px] sm:text-[18px] md:text-[25px] text-[#0C6967] tracking-wide text-center">
        Our talented team members who deliver only the best results
      </p>

      <div className="relative mt-8">
        {/* Slider Component */}
        <Slider ref={sliderRef} {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-[460px] object-cover" />
                <div className="absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="font-primary-head font-semibold text-[#ffffff]
                     text-[31px] tracking-wide">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="w-full">
            {/* Navigation Buttons */}
        <button
          className="absolute left-[165px] sm:left-[485px] md:left-[500px] lg:left-[760px] xl:left-[870px] bottom-[-90px] transform -translate-y-1/2 bg-white p-3 border-[1px] border-[#DFE2E6] focus:outline-0 rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowLeft className="text-gray-700" />
        </button>
        <button
          className="absolute right-5 bottom-[-90px] transform -translate-y-1/2 bg-white p-3 border-[1px] border-[#DFE2E6] focus:outline-0 rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowRight className="text-gray-700" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-[-68px] left-4 font-primary-head text-gray-700 font-bold text-[27px]">
          {currentSlide + 1}  <span className="font-light text-[#8791A3] text-[23px]">/</span> <span className="font-light text-[#DFE2E6]">{teamMembers.length}</span>
        </div>
        </div>


      </div>
    </div>

        </div>
        </>
    );
}
export default FiveA