import { useNavigate } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
function Vbutton({title}) {
    const Navigate = useNavigate();
    return(
        <>
       <div className="flex">
       <button onClick={() => {
            Navigate("/");
        }} className="bg-[#0C6967] text-white px-7 py-5 flex items-center gap-2 
        rounded-[45px] hover:bg-[#0C6967] text-[16px] font-primary-head tracking-[1px] mt-16 cursor-pointer">
           <FaPlayCircle /> {title} 
        </button>
       </div>
        </>
    );
}
export default Vbutton