import { useState } from "react";
import { ArrowLeft, ArrowRight, } from "lucide-react";
import Livia from '../../assets/Livia.png';
import John from '../../assets/john.jpg';
import Sophia from '../../assets/Sophia.jpg';

const testimonials = [
    {
      name: "Livia Dias",
      text: "Only the best momo you can find in the market. Different varieties of momo to choose from. Will be visiting again soon!",
      image: Livia,
    },
    {
      name: "John Doe",
      text: "Amazing experience! The flavors were incredible, and the service was top-notch. Highly recommend!",
      image: John,
    },
    {
      name: "Sophia Lee",
      text: "Absolutely loved the food! Fresh ingredients and great taste. Will definitely return!",
      image: Sophia,
    },
  ];

  export default function Six() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

    return(
        <>
        <div className="bg-[#FAFBFB] py-14">
            <div className="w-[100%] m-auto px-4 sm:px-4 md:px-14 flex justify-between">

                <div className="max-w-auto mx-auto font-primary-head flex flex-col md:flex-row items-center gap-6">
                   
                        <div className="w-[100%] sm:w-[100%] md:w-[50%] text-center md:text-left">
                        <h2 className="font-bold text-[29px] sm:text-[29px] md:text-[39px]  text-[#101828]">200+ <span className="text-[#D95103]">Happy Customers</span></h2>
                        <h3 className="font-semibold text-[20px] sm:text-[20px] md:text-[25px] text-[#0C6967] ">What our customers say about us</h3>
                        <p className="text-gray-600 text-[20px] sm:text-[20px] md:text-[24px] italic mb-7 mt-7 sm:mt-7 md:mt-12">"{testimonials[currentIndex].text}"</p>
                            <h2 className="text-[25px] sm:text-[25px] md:text-[31px] font-bold text-[#101828] mb-5 sm:mb-5 md:mb-10">{testimonials[currentIndex].name}</h2>
                            
                            <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <button onClick={prevTestimonial} className="p-2 bg-[#FAFBFB] border-[1px] border-[#DFE2E6] hover:bg-gray-300 rounded-full">
                                <ArrowLeft size={17}/>
                            </button>
                            <button onClick={nextTestimonial} className="p-2 bg-[#FAFBFB] border-[1px] border-[#DFE2E6] hover:bg-gray-300 rounded-full">
                                <ArrowRight size={17}/>
                            </button>
                            </div>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[50%]">
                        <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="max-w-full h-auto sm:max-w-full sm:h-auto md:w-[456px] md:h-[576px] rounded-[10px] object-cover mx-auto"
                        />
                    </div>
                </div>
    </div>
        </div>
        </>
  );
}

                
