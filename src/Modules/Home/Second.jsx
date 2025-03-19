import customer from '../../assets/customer.png';
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button";

function Second() {
    const Navigate = useNavigate();
    return(
        <>
        <div className="w-[100%] m-auto px-4 py-7 sm:px-4 sm:py-7 md:px-14 md:py-14">
            <div className="flex justify-around items-center flex-col sm:flex-col md:flex-row">

                <div className='w-[100%] sm:w-[100%] md:w-[40%]'>
                    <img src={customer} alt='customer_images' className='max-w-full h-auto m-auto'/>
                </div>

                <div className='w-[100%] sm:w-[100%] md:w-[60%] mt-5 ml-0 sm:mt-5 sm:ml-0 md:mt-32 md:ml-14'>
                    <h2 className='font-primary-head font-bold text-[#101828] tracking-wide text-[27px] sm:text-[27px] md:text-[39px] mb-5 sm:mb-5 md:mb-9 text-center sm:text-center md:text-left'>
                        Why Customer <span className='text-[#D95103]'>Love Us</span> </h2>
                    <p className='text-[16px] sm:text-[16px] md:text-[20px] text-[#6B788E] tracking-wider leading-9 font-primary-head font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</p>
                    
                        <Button title="Explore Our Story"/>
                </div>

            </div>
        </div>
        </>
    );
}
export default Second