import momoa from '../../assets/momoa.png';
import momoab from '../../assets/momoab.png';
import momob from '../../assets/momob.png';
import momobb from '../../assets/momobb.png';
import momoc from '../../assets/momoc.png';
import momocc from '../../assets/momocc.png';



function ThreeA() {
    return(
        <>
        <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14 py-7 sm:py-7 md:py-7 lg:py-16">

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between mb-[100px] sm:mb-[100px] md:mb-[100px] lg:mb-[120px] xl:mb-[180px]">

                <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] md:mb-10 lg:mr-10'>
                    <h2 className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[55px]'>
                        Our momos are <span className='text-[#D95103]'>made with love</span></h2>
                    <p className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wide leading-[35px] pt-6 pb-6 sm:pb-6 md:pb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type 
                         specimen book.</p>
                </div>
                
                <div className='relative'>
                     <img src={momoa} alt='' className='max-w-full h-auto m-auto'/> 
                     <div className='absolute w-[50%] -bottom-[60px] left-[15px] sm:left-[15px] md:left-[15px] lg:left-[-46px] xl:-left-[150px]'><img src={momoab} alt=''/></div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between mb-[40px] sm:mb-[40px] md:mb-[60px] lg:mb-[100px] xl:mb-[180px]">

            <div className='relative'>
                <img src={momob} alt='' className='max-w-full h-auto m-auto'/> 
                <div className='absolute w-[50%] -bottom-[60px] lg:bottom-0 xl:bottom-[-65px] right-[15px] sm:right-[15px] md:-right-[15px] lg:-right-[20px] xl:-right-[95px]'><img src={momobb} alt=''/></div>
            </div>

            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] mt-20 sm:mt-20 md:mt-20 lg:mt-0 lg:ml-10'>
                <h2 className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[55px]'>
                Taste the difference with <span className='text-[#D95103]'>our handcrafted momos</span></h2>
                <p className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wide leading-[35px] pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.</p>
            </div>

            </div>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between mb-[100px] sm:mb-[100px] md:mb-[100px] lg:mb-[70px] xl:mb-[90px]">

                <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] lg:mr-10'>
                    <h2 className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[55px]'>
                    Our momos are the perfect <span className='text-[#D95103]'>blend of tradition</span> and 
                    <span className='text-[#D95103]'> innovation</span> </h2>
                    <p className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wide leading-[35px] pt-6 pb-6 sm:pb-6 md:pb-10 lg:pb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</p>
                </div>

                <div className='relative'>
                    <img src={momoc} alt='' className='max-w-full h-auto m-auto'/> 
                    <div className='absolute w-[50%] -bottom-[60px] md:-bottom-[120px] lg:-bottom-0 xl:bottom-[-76px] left-[15px] sm:left-[15px] md:left-[15px] lg:left-[-33px] xl:-left-[121px]'><img src={momocc} alt=''/></div>
                </div>
                </div>

        </div>
        </>
    );
}
export default ThreeA