import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import scan from '../assets/scan.png';

function Menu() {
    const [product, setProducts] = useState([]);
    const getProduct = async () => {
        try {
          let res = await fetch("https://dummyjson.com/recipes?limit=9");
          res = await res.json();
          console.log(res);
          setProducts(res.recipes);
        } 
        catch (error) {
          console.log(error);
        }
        };
        useEffect(() => {
        getProduct();
        }, []);

    return(
        <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14 py-6 sm:py-6 md:py-6 lg:py-12 font-primary-head">
          <div className="text-center">
            <h2 className="text-[39px] sm:text-[39px] md:text-[39px] lg:text-[56px] text-[#0C6967] font-primary-subhead mb-4">Our Menu</h2>
            <h3 className="text-[27px] sm:text-[27px] md:text-[27px] lg:text-[31px] text-[#D95103] font-semibold">Our menu is more than just momos,</h3>
            <h3 className="text-[27px] sm:text-[27px] md:text-[27px] lg:text-[31px] font-semibold mb-7">with a variety of dished to cater to all tastes and preferences.</h3>
            <div className="w-[100%] bg-[#FAFBFB] p-4 sm:p-4 md:p-9 rounded-[3px] mb-10">
              <h4 className="text-[27px] sm:text-[27px] md:text-[29px] xl:text-[31px] text-[#0C6967] font-semibold mb-1.5">Scan the QR code</h4>
              <p className="text-[18px] sm:text-[18px] md:text-[19px] xl:text-[20px] text-[#252D43] mb-8">You can also check the allergy advices using your phone as well</p>
              <img src={scan} alt="" className="text-center m-auto"/>
            </div>
          </div>

          <div className="relative text-center font-primary-mid text-[40px] font-medium tracking-wide mt-12 mb-12">
            <span className="before:absolute before:left-[300px] before:-top-2 before:content-none sm:before:content-none md:before:content-none xl:before:content-[url('assets/brusha.png')] after:absolute after:right-[300px] after:-top-2 after:content-none sm:after:content-none md:after:content-none xl:after:content-[url('assets/brusha.png')]">Momos</span>
            </div>

            { product.length > 0 ? (
        <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-10">
          {product.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[100%] sm:w-[40%] p-4 flex justify-center items-center text-center">
               <NavLink to={`/productdescription/${item.id}`}>
               <img src={item.image} alt="" className="h-50 w-50 rounded-[50%] m-auto" />
                <p className="font-primary-head font-semibold text-[16px] my-4">{item.name}</p>
               </NavLink>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          <div className="mt-24 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-500 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-500 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

<div className="relative text-center font-primary-mid text-[40px] font-medium tracking-wide mt-12 mb-12">
            <span className="before:absolute before:left-[300px] before:-top-2 before:content-none sm:before:content-none md:before:content-none xl:before:content-[url('assets/brusha.png')] after:absolute after:right-[300px] after:-top-2 after:content-none sm:after:content-none md:after:content-none xl:after:content-[url('assets/brusha.png')]">Momos</span>
            </div>
        </div>
    );
}
export default Menu