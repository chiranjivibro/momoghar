import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
function Button({title}) {
    const Navigate = useNavigate();
    return(
        <>
        <button onClick={() => {
            Navigate("/about");
        }} className="bg-[#0C6967] text-white px-7 py-5 flex items-center gap-2 
        rounded-[45px] hover:bg-[#0C6967] text-[16px] font-primary-head font-medium tracking-[1px] mt-16 cursor-pointer">
           {title} <GoArrowRight />
        </button>
        </>
    );
}
export default Button