import { useSearchParams } from 'react-router-dom';
import okuccess from '../assets/okuccess.png';

function Success() {
    const [SearchParams] = useSearchParams()
    const res = SearchParams.get("data")
    console.log(res)
    const decoded = atob(res)
    console.log(decoded)

    let  x =  JSON.parse(decoded);
    console.log(x.total_amount)
    return(
        <div className="w-[100%] m-auto px-14 pt-[131px] pb-16 text-center font-primary-head">
            <img className="w-[40%] m-auto" src={okuccess} alt=""/>
            <h2 className='font-bold text-[#2caa27] my-3 text-[25px]'>Payment Success </h2>
           <p className='font-normal mb-1.5'>Total Amount: Rs.{x.total_amount}</p> 
           <p className='font-normal mb-1.5'>Status: <span className=''>{x.status}</span> </p>
           <p className='font-normal mb-1.5'>Transaction Code: {x.transaction_code}</p>
        </div>
    )
}
export default Success