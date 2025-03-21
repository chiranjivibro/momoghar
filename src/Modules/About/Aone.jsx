import Mchefs from '../../assets/Mchefs.png';


function Aone() {
    return(
        <>
            <div className="w-[100%] m-auto px-4 sm:px-4 md:px-14  flex flex-col sm:flex-col md:flex-row justify-between pt-[115px] pb-7 sm:pt-[115px] sm:pb-7 md:pt-[141px] md:pb-14 lg:pt-[151px]">
                <div className='w-[100%] sm:w-[100%] md:w-[50%] mt-5 sm:mt-5 md:mt-10'>
                    <h2 className='font-primary-subhead font-light text-[37px] sm:text-[37px] md:text-[64px]  text-[#0C6967]'>About Us</h2>

                    <h3 className='font-primary-head font-light uppercase text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wider mt-7 sm:mt-7 md:mt-3 lg:mt-16'>
                        We pride ourself on</h3>
                    <p className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[29px] lg:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[53px] mt-3 sm:mt-3 md:mt-3 lg:mt-8 mb-4 sm:mb-4 md:mb-0'>
                        <span className='text-[#D95103] font-bold'>Our authentic momo recipes</span> passed down through generations</p>
                </div>

                <div className='w-[100%] sm:w-[100%] md:w-[50%] flex align-middle'>
                    <img src={Mchefs} alt='chief-snap' className='max-w-full h-auto m-auto'/>
                </div>
            </div>
        </>
    )
}
export default Aone