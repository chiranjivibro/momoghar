import quality from '../../assets/Quality.png';
import party from '../../assets/party.png';
import Chefs from '../../assets/Chefs.png';
import Sevbutton from '../../Components/Sevbutton';


function Five() {
    return(
        <>
        <div className='w-[100%] m-auto px-4 py-7 sm:px-4 md:px-14 sm:py-7 md:py-16'>

            <div className='flex flex-wrap sm:flex-col md:flex-row justify-between mb-6'>
            <div className='text-center w-[100%] mb-9 sm:w-[100%] sm:mb-9 md:w-[23%] md:mb-0'>
                <img src={quality} alt='quality_icon' className='w-15 h-15 sm:w-15 sm:h-15 md:w-20 md:h-20 m-auto'/>
                <h2 className='text-[23px] sm:text-[23px] md:text-[23px] lg:text-[31px] text-[#000000] font-primary-head font-bold my-3 sm:my-3 md:my-5 tracking-wide'>Quality Food</h2>
                <p className='text-[14px] sm:text-[14px] md:text-[16px] text-[#252D43] font-primary-head font-medium'>Only the best food with top quality products and ingredients</p>
            </div>

            <div  className='text-center w-[100%] mb-9 sm:w-[100%] sm:mb-9 md:w-[23%] md:mb-0'>
            <img src={party} alt='quality_icon' className='w-15 h-15 sm:w-15 sm:h-15 md:w-17 md:h-17 lg:w-20 lg:h-20 m-auto'/>
                <h2 className='text-[23px] sm:text-[23px] md:text-[23px] lg:text-[31px] text-[#000000] font-primary-head font-bold my-3 sm:my-3 md:my-5 tracking-wide'>Private Party</h2>
                <p className='text-[14px] sm:text-[14px] md:text-[16px] text-[#252D43] font-primary-head font-medium'>Get the best food for all your private parties and gatherings</p>
            </div>

            <div className='text-center w-[100%] sm:w-[100%] md:w-[23%]'>
            <img src={Chefs} alt='quality_icon' className='w-15 h-15 sm:w-15 sm:h-15 md:w-20 md:h-20 m-auto'/>
                <h2 className='text-[23px] sm:text-[23px] md:text-[23px] lg:text-[31px] text-[#000000] font-primary-head font-bold my-3 sm:my-3 md:my-5 tracking-wide'>Categring</h2>
                <p className='text-[14px] sm:text-[14px] md:text-[16px] text-[#252D43] font-primary-head font-medium'>Get the best food for any occassions and gatherings</p>
            </div>
            </div>
            
            <div className='flex justify-center m-auto'>
            <Sevbutton title="Explore Our Services"/>
            </div>

            

        </div>
        </>
    );
}
export default Five