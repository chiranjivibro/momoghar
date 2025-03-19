import dinebg from '../../assets/dinebg.png';
import Abutton from '../../Components/Abutton';

function TwoS() {
    return(
        <>
         <div>
                <div style={{backgroundImage:`url(${dinebg})`}}
                className='relative px-4 sm:px-4 md:px-4 lg:px-4 xl:px-14  h-[390px] sm:h-[390px] md:h-[390px] lg:h-[545px] xl:h-[545px] bg-cover bg-no-repeat bg-center'>
                    <div className='absolute inset-0 bg-black opacity-55'></div>

                    <div className='relative w-[100%] m-auto'>
                        <div className='absolute top-[45px] sm:top-[70px] md:top-[25px] lg:top-[71px] xl:top-[195px] left-[0px] sm:left-[0px] md:left-[56px]'>
                        <h2 className='font-primary-head font-bold text-[29px] sm:text-[29px] md:text-[49px] text-white drop-shadow-md mt-5 tracking-wide'>
                        Dine With Us</h2>
                        <p className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[25px] text-white drop-shadow-md mt-3 tracking-wide'>
                        Enjoy our momos in the comfort of your own home with our delivery services</p>
                            <Abutton title="Watch the Video"/>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default TwoS