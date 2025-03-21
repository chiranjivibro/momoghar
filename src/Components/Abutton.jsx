import { useNavigate } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

function Vbutton({ title, url }) {
    const navigate = useNavigate(); // camelCase for variable names

    return (
        <div className="">
        <button 
            onClick={() => window.open("https://www.youtube.com/watch?v=u9nry4Psey4", "_blank")} // Opens the URL in a new tab
            className="bg-[#0C6967] text-white px-7 py-5 flex items-center gap-2 
            rounded-[45px] hover:bg-[#0A5B55] text-[16px] font-primary-head tracking-[1px] mt-7 cursor-pointer">
            <FaPlayCircle /> {title} 
        </button>
    </div>
    );
}

export default Vbutton;