import Touch from '../../Components/Touch';
function FourS() {
    return(
        <>
        <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 xl:px-14">
            <div className='p-14 bg-[#F5F6F7] rounded-[15px] mb-20'>
            <h2 className="font-primary-head font-bold text-[31px] text-[#101828] tracking-wide text-center">Got any Queries ?</h2>
            <p className="font-primary-head font-normal text-[16px] text-[#6B788E] text-center my-6">
                If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                <Touch title="Get In Touch"/>
            </div>
        </div>
        </>
    )
}
export default FourS