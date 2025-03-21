import circle from '../../assets/circle.png';
import momoOne from "../../assets/momoOne.png";
import oneBg from "../../assets/oneBg.png";
import {useNavigate} from "react-router-dom";
import Sbutton from "../../Components/Sbutton";

function First() {
    const Navigate = useNavigate();
    return (
      <div className="w-full m-auto px-4 pt-[145px] sm:px-4 sm:pt-[145px] sm:pb-12 md:px-0 md:pt-[105px] md:pb-0 lg:px-0 lg:pt-[105px] lg:pb-0  xl:pt-[103px] xl:pb-0 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="relative h-auto mb-6 md:mb-0 md:pl-4 md:pt-20 xl:pl-14 xl:py-24">
            <h6 className="font-primary-head font-normal text-[#6B788E] text-[16px] tracking-[2px] uppercase">
              Restaurant
            </h6>
            <h2 className="text-[35px] sm:text-[35px] md:text-[45px] text-[#000000] font-primary-head font-bold mt-6">
              The 
              <span
                style={{
                  backgroundImage: `url(${oneBg})`,
                  backgroundSize: "194px",
                }}
                className="absolute inline-block w-52 h-28 text-center bg-center bg-contain bg-no-repeat top-6 sm:top-6 md:top-[106px] xl:top-[123px]"
              >
                <h2 className="text-[40px] md:text-[51px] text-white pt-5 sm:pt-5 md:pt-4">#one</h2>
              </span>
            </h2>
            <h3 className="text-[45px] md:text-[61px] text-[#000000] font-primary-head font-bold">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h3>
            <p className="text-[16px] md:text-[18px] font-primary-head font-bold text-[#252D43] tracking-[1px] mt-4">
              More than <span className="text-[#D95103] text-[20px] md:text-[25px] font-bold">20+ Varieties</span> of momo available for you
            </p>
            <Sbutton title="Explore Food Menu" />
          </div>
  
          <div className="overflow-hidden relative flex justify-center md:justify-end md:align-middle md:items-center xl:items-center xl:align-middle xl:py-24">
            <img src={momoOne} alt="Momo Image" className="max-w-full h-auto z-40" />
            <img src={circle} alt="Circle Background" className="absolute h-[214px] -right-0 top-[-7px] sm:h-[420px] md:h-[547px] md:-right-[25px] xl:h-[682px] xl:top-[-7px]" />
          </div>
        </div>
      </div>
    );
  }
  export default First;