import scan from '../../assets/scan.png';
function FourAa() {
    return(
        <>
        <div className='w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14'>
        <div className='bg-[#FAFBFB] rounded-[13px] p-9 my-11 sm:my-11 md:my-24'>
          <h2 className='font-primary-head font-bold text-[31px] text-[#0C6967] tracking-wide text-center'>Scan the QR Code</h2>
          <p className='font-primary-head font-medium text-[20px] text-[#252D43] tracking-wide text-center mt-5 mb-9'>You can also check the allergy advices using your phone as well</p>
          <img src={scan} alt='' className='text-center m-auto'/>
        </div>
        </div>
        </>
    );
}
export default FourAa