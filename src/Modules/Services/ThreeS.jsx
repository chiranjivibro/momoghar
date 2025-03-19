import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import party from '../../assets/party.png';
import pone from '../../assets/pone.jpg';
import ptwo from '../../assets/ptwo.jpg';
import pthree from '../../assets/pthree.jpg';
import pfour from '../../assets/pfour.jpg';
import pfive from '../../assets/pfive.jpg';
import cone from '../../assets/cone.jpg';
import ctwo from '../../assets/ctwo.jpg';
import cthree from '../../assets/cthree.jpg';
import cfour from '../../assets/cfour.jpg';
import cfive from '../../assets/cfive.jpg';
import QRCode from '../../assets/QRCode.png';


function ThreeS() {

    // Slider settings with custom arrows
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      // Image array
  const images = [pone, ptwo, pthree, pfour, pfive];
  const snaps = [cone, ctwo, cthree, cfour, cfive];

    return(
        <>
        
        <div className='w-[100%] m-auto px-4 sm:px-4 md:px-4 xl:px-14 py-7 sm:py-7 md:py-7 xl:py-14'>

           <div className='w-[100%] flex flex-col sm:flex-col md:flex-row justify-between overflow-hidden'>

           <div className='w-[100%] sm:w-[100%] md:w-[50%] mr-0 sm:mr-0 md:mr-10'>
                <img src={party} alt='' className='w-[20%] sm:w-[10%] md:w-[10%] xl:w-[15%]'/>

                <h3 className='font-primary-head font-bold text-[23px] sm:text-[23px] md:text-[31px] tracking-wide text-[#101828] mt-6'>
                    Private Party</h3>
                <p className='font-primary-head font-normal text-[15px] sm:text-[15px] md:text-[16px] text-[#6B788E] 
                tracking-wide leading-[30px] sm:leading-[30px] md:leading-[37px] w-[100%] sm:w-[100%] md:w-[87%] mt-3 sm:mt-3 md:mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                
                <img src={QRCode} alt='' className='mt-5 sm:mt-5 md:mt-11'/>
            </div>

            <div className='w-[100%] sm:w-[100%] md:w-[50%]'>

            <div className="max-w-6xl mx-auto px-0 sm:px-0 md:px-0 xl:px-4 py-7 sm:py-7 md:py-7 lg:py-10">
            <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
    </div>


                
            </div>
           </div>

           <div className='w-[100%] flex flex-col sm:flex-col md:flex-row justify-between overflow-hidden mt-3 sm:mt-3 md:mt-28'>
          
            <div className='w-[100%] sm:w-[100%] md:w-[50%]'>
            <div className="max-w-6xl mx-auto px-0 sm:px-0 md:px-0 xl:px-4 py-7 sm:py-7 md:py-7 lg:py-10">
            <Slider {...settings}>
            {snaps.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
    </div>
            </div>

            <div className='w-[100%] sm:w-[100%] md:w-[50%] ml-0 sm:ml-0 md:ml-10 xl:ml-40'>
                <img src={party} alt='' className='w-[20%] sm:w-[10%] md:w-[10%] xl:w-[15%]'/>

                <h3 className='font-primary-head font-bold text-[23px] sm:text-[23px] md:text-[31px] tracking-wide text-[#101828] mt-6'>
                    Categring</h3>
                <p className='font-primary-head font-normal text-[15px] sm:text-[15px] md:text-[16px] text-[#6B788E] 
                tracking-wide leading-[30px] sm:leading-[30px] md:leading-[37px] w-[100%] sm:w-[100%] md:w-[87%] mt-3 sm:mt-3 md:mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                
                <img src={QRCode} alt='' className='mt-11'/>
            </div>

           </div>

        </div>

        </>
    )
}
export default ThreeS