import chef from '../../assets/chef.png';
import Vbutton from '../../Components/Vbutton';


function Four() {
    return(
        <>
        <div>
            <div style={{backgroundImage:`url(${chef})`}}
            className='relative h-[390px] sm:h-[390px] md:h-[690px] bg-cover bg-no-repeat bg-center'>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='relative w-full m-auto px-4 sm:px-4 md:px-0 py-16 sm:py-16 md:py-52 text-center'>
                    <h2 className='font-primary-head font-bold text-[29px] sm:text-[29px] md:text-[49px]  text-white drop-shadow-md mt-5 tracking-wide'>
                        Process behind the making</h2>
                    <h3 className='font-primary-head font-normal text-[16px] sm:text-[16px] md:text-[25px] text-white drop-shadow-md mt-3 tracking-wide'>
                        See how only chefs cooks only the best momos</h3>
                        <Vbutton title="Watch the Video"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Four