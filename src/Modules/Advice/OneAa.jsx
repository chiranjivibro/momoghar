import servicess from '../../assets/servicess.png';

function OneAa() {
    return(
        <>
         <div className="w-[100%] m-auto px-4 sm:px-4 md:px-14 flex flex-col sm:flex-col md:flex-row justify-between align-middle py-7 sm:py-7 md:py-14">
                <div className='w-[100%] sm:w-[100%] md:w-[50%] mt-5 sm:mt-5 md:mt-10 text-start'>
                    <h2 className='font-primary-subhead font-light text-[37px] sm:text-[37px] md:text-[53px] text-[#0C6967]'>Allergy Adivces</h2>
                
                    <h3 className='font-primary-head font-light uppercase text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wider mt-8 sm:mt-8 md:mt-8 lg:mt-16'>
                        At our Restaurant</h3>
                    <p className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[29px] lg:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[53px] mt-6 sm:mt-6 md:mt-6 lg:mt-8 mb-6 sm:mb-6 md:mb-6 lg:mb-0'>
                    We use only the freshest and highest quality ingredients in all our dishes,
                        <span className='text-[#D95103] font-bold'> and offer transparency in our ingredient labeling.</span> 
                            </p>
                </div>
                
                <div className='w-[100%] sm:w-[100%] md:w-[50%] flex align-middle'>
                    <img src={servicess} alt='' className='max-w-full h-auto m-auto'/>
                </div>
        </div>
        </>
    );
}
export default OneAa