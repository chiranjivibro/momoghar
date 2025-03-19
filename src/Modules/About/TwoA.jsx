import videobg from '../../assets/videobg.png';
import Abutton from '../../Components/Abutton';

function TwoA() {
    return(
        <>
            <div>
                <div style={{backgroundImage:`url(${videobg})`}}
                className='relative px-4 sm:px-4 md:px-4 lg:px-14 xl:px-14  h-[390px] sm:h-[390px] md:h-[415px] lg:h-[420px] xl:h-[550px] bg-cover bg-no-repeat bg-center'>
                    <div className='absolute inset-0 bg-black opacity-55'></div>

                    <div className='relative w-[100%] m-auto'>
                        <div className='absolute top-[45px] sm:top-[75px] md:top-[47px] lg:top-[71px] xl:top-[125px] left-0'>
                        <h2 className='font-primary-head font-bold text-[29px] sm:text-[29px] md:text-[49px] text-white drop-shadow-md mt-5 tracking-wide'>
                            Process behind the making</h2>
                        <p className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[25px] text-white drop-shadow-md mt-3 tracking-wide'>
                            See how we make momos that you like from only the best ingredients</p>
                            <Abutton title="Watch the Video"/>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default TwoA