import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

function OneC() {
    return(
        <>
        <div className="w-[100%] m-auto px-4 pt-[141px] sm:px-4 sm:pt-[141px] md:px-4 md:pt-[141px] lg:px-14 lg:pt-[151px] pb-5 sm:pb-5 md:pb-7 lg:pb-16">
            <h2 className="font-primary-subhead font-light text-[33px] sm:text-[33px] md:text-[35px] lg:text-[56px] text-[#0C6967] text-center">Our Contact</h2>
            <h3 className="font-primary-head font-light uppercase text-[18px] sm:text-[18px] md:text-[19px] lg:text-[24px] text-[#6B788E] tracking-wider mt-6 text-center">Get in Touch</h3>
            <p className="font-primary-head font-semibold text-[27px] sm:text-[27px] md:text-[29px] lg:text-[31px] tracking-wide mt-4 text-center">
                <span className='text-[#D95103] font-bold'>Our Friendly Team</span> would love to hear from you</p>
            
        <div className="flex flex-col sm:flex-col md:flex:col lg:flex-row justify-between align-middle gap-4 mt-10">

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px] mb-5 sm:mb-5 md:mb-5 lg:mb-0">
                <div className="flex items-center">
                <FaLocationDot size={21} color="#D95103" /> <p className="font-primary-head font-semibold text-[16px] tracking-wide ml-5">Location</p>
                    </div>
                    <p className="font-primary-head font-medium text-[16px] leading-[27px] mt-8">New Banaishwor, Kathmandu, Nepal</p>
            </div>

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px] mb-5 sm:mb-5 md:mb-5 lg:mb-0">
                <div className="flex items-center">
                <FaPhoneVolume  size={21} color="#D95103" /> <p className="font-primary-head font-semibold text-[16px] tracking-wide ml-5">Phone</p>
                    </div>
                
                <div className="flex justify-between mt-7">
                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">Mobile: </h2>
                    <div>
                    <h3 className="font-primary-head font-semibold text-[16px]">0977 984 2567 219</h3>
                    <h3 className="font-primary-head font-semibold text-[16px]">0977 982 6756 267</h3>
                    </div>
                    
                </div>

                <div className="flex justify-between mt-7">
                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">Tel: </h2>
                    <div>
                    <h3 className="font-primary-head font-semibold text-[16px]">01 4700000</h3>
                    <h3 className="font-primary-head font-semibold text-[16px]">01 4700000</h3>
                    </div>
                    
                </div>
                   
                </div>

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%] p-5 shadow-[0px_7px_25px_0px_rgba(0,_0,_0,_0.1)] rounded-[15px]">
                <div className="flex items-center">
                <IoTime  size={21} color="#D95103" /> <p className="font-primary-head font-semibold text-[16px] tracking-wide ml-5">Service Time</p>
                    </div>
                
                <div className="flex justify-between mt-7">
                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">MON - FRI: </h2>
                    <div>
                    <h3 className="font-primary-head font-semibold text-[16px]">8 AM - 8 PM</h3>
                    </div>
                    
                </div>

                <div className="flex justify-between mt-7">
                    <h2 className="font-primary-head font-semibold text-[16px] text-[#498E8D]">SAT - SUN: </h2>
                    <div>
                    <h3 className="font-primary-head font-semibold text-[16px]">CLOSED</h3>
                    </div>
                    
                </div>
                   
                </div>
        </div>

        </div>
        </>
    );
}
export default OneC