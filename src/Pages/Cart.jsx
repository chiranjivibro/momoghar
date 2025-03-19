import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Ecartt from '../assets/emptycart.png';
function Cart() {
    const { state, dispatch } = useContext(cartContext);

    const totalAmount = state.cartItems.reduce((acc,item) => {
      return acc + item.qty * item.caloriesPerServing;
    }, 0);
  
    const totalItems = state.cartItems.reduce((acc,items)=> {
      return acc + items.qty;
    }, 0 );
    return(
        <>
         <div>
      <div>
        {state.cartItems.length > 0 ? (
          <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14 py-7 sm:py-7 md:py-7 lg:py-16 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center">

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[65%] p-5 bg-[#fafafa] font-primary-head">
              {state.cartItems.map((Item) => {
                return (
                  <div
                    key={Item.id}
                    className="w-[100%] m-auto flex flex-col sm:flex-row md:flex-row lg:flex-row bg-[#ffffff] p-5 shadow-[0px_6px_15px_0px_rgba(0,_0,_0,_0.1)] mb-5 sm:mb-5 md:mb-5 lg:mb-10"
                  >
                    <div className="w-[50%] sm:w-[26%] md:w-[26%] lg:w-[25%]">
                      <img className="w-[100%] shadow-[0px_0px_5px_5px_rgba(0,_0,_0,_0.1)] border-2 border-white" src={Item.image} alt="" />
                    </div>

                    <div className="w-[100%] flex flex-col sm:flex-row md:flex-row pl-0 sm:pl-6 md:pl-6">

                      <div className="w-[100%] sm:w-[100%] md:w-[70%] lg:w-[70%] ml-0 sm:ml-0 md:ml-0 lg:ml-0 mt-5 sm:mt-5 md:mt-5 lg:mt-5">
                        <p className="font-semibold text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{Item.name}</p>

                        <p className="font-semibold text-[16px]">Rs.
                          <span className="text-[#0C6967]"> {Item.caloriesPerServing}</span></p>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "Delete",
                              payload: { id: Item.id },
                            });
                          }}
                          className="mt-2 -ml-1"
                        >
                          <MdDelete size={25} color="#D95103"/>
                        </button>
                      </div>

                      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%] mt-5 sm:mt-5 md:mt-5 lg:mt-5 space-x-3">
                        
                        <button
                          onClick={() => {
                            dispatch({
                              type: "Increment",
                              payload: { id: Item.id },
                            });
                          }}
                          className="bg-[#0C6967] w-8 h-8 text-white"
                        >
                          +
                        </button>

                        <span className="text-lg">{Item.qty}</span>
                          <button
                          onClick={() => {
                            dispatch({
                              type: "Decrement",
                              payload: { id: Item.id },
                            });
                          }}
                          className="bg-[#0C6967] w-8 h-8 text-white"
                        >
                          -
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
              <button
              onClick={() => {
                dispatch({
                  type:"Clear"
                })
              }}
              className="bg-[#D95103] font-light p-2 text-white rounded w-36 py-3 cursor-pointer">Clear Cart</button>
            </div>

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[35%] bg-[#f1efef] p-4 sm:p-4 md:p-12 lg:p-8 flex flex-col font-primary-head">
              <h1 className="font-semibold text-[18px] mb-3">Order Summary</h1>
              <p className="font-normal text-[16px] mb-1">Shipping Charge: 120</p>
              <p className="font-bold text-[16px] mb-6">Total: <span className="font-semibold">{totalAmount + 120}</span></p>
              
              <button className="w-64 p-3 bg-[#D95103] text-white"> 
                <NavLink to="/payment">Procced To CheckOut ({totalItems})</NavLink>
              </button>
              
            </div>
          </div>
        ) : (
          <div className="w-[1234px] m-auto py-20 font-primary-head text-center">
          <NavLink to="/menu">
            <img
              className="w-[50%] m-auto"
              src={Ecartt}
              alt=""
            />
          </NavLink>
          <p className="font-semibold p-5 text-2xl ">
            Empty Cart{" "}
            <NavLink to="/menu" className="underline text-red-500">
               Shop Now
            </NavLink>
          </p>
        </div>
        )}
      </div>
    </div>
        </>
    );
}
export default Cart