import servicess from '../../assets/servicess.png';

function OneS() {
    return(
        <>
         <div className="w-[100%] m-auto px-4 sm:px-4 md:px-14  flex flex-col sm:flex-col md:flex-row justify-between align-middle py-7 sm:py-7 md:py-14">
                        <div className='w-[100%] sm:w-[100%] md:w-[50%] mt-5 sm:mt-5 md:mt-10'>
                            <h2 className='font-primary-subhead font-light text-[37px] sm:text-[37px] md:text-[64px] text-[#2A7C7A]'>Our Services</h2>
        
                            <h3 className='font-primary-head font-light uppercase text-[16px] sm:text-[16px] md:text-[20px] text-[#86888d] tracking-wider mt-7 sm:mt-7 md:mt-3 lg:mt-16'>
                            Knowing our customers needs</h3>
                            <p className='font-primary-head font-bold text-[25px] sm:text-[25px] md:text-[29px] lg:text-[39px] tracking-wide leading-[35px] sm:leading-[35px] md:leading-[53px] mt-3 sm:mt-3 md:mt-3 lg:mt-8 mb-4 sm:mb-4 md:mb-0'>
                                <span className='text-[#D95103] font-extrabold'>We're more than just momos.</span> <br></br>
                                We're a full-service dining experience.</p>
                        </div>
        
                        <div className='w-[100%] sm:w-[100%] md:w-[50%] flex align-middle'>
                            <img src={servicess} alt='' className='max-w-full h-auto m-auto'/>
                        </div>
                    </div>
        </>
    )
}
export default OneS