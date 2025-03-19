import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

function Seven() {
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [select, setSelect] = useState("");
  const formHandel =(e) => {
e.preventDefault();


// Handle get in touch logic here (e.g., send data to server)
console.log('Name:', name);
console.log('Last:', last);
console.log('Email:', email);
console.log('Selected Country:', select);
console.log('Phone:', phone); 

// Reset form fields
setName('');
setLast('');
setEmail('');
select('');
setPhone('');

  };

    return(
        <>
        <div className="w-[100%] m-auto px-4 py-7 sm:px-4 md:px-14 sm:py-7 md:py-14 ">
            <h2 className="font-primary-head font-bold text-[29px] sm:text-[29px] md:text-[39px] text-center tracking-wide">Get 
                <span className="text-[#D95103]"> In Touch</span></h2>
            <p className="font-primary-head font-semibold text-[19px] sm:text-[19px] md:text-[25px] text-[#0C6967] text-center tracking-wide">Our Friendly team would love to hear from you</p>
            <div className="mt-14 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between shadow-[4px_4px_32px_0px_rgba(0,_0,_0,_0.1)] p-4 sm:p-4 md:p-8 rounded-[11px]"> 

                <div className="bg-[#0C6967] p-4 sm:p-4 md:p-9 rounded-[11px] w-[100%] sm:w-[100%] md:w-[100%] lg:w-[35%] text-white font-primary-head">
                    
                   <div>
                   <div className="flex items-start">
                    <FaLocationDot size={25} className=""/>
                    <h5 className="font-medium text-[17px] sm:text-[17px] md:text-[19px] tracking-wide ml-3"> Our Address:</h5>
                    </div>
                    <p className="text-[17px] sm:text-[17px] md:text-[20px] italic font-light tracking-wide my-6">
                        New Baneshwor, Kathmandu, Bagmati, Nepal</p>
                   </div>

                   <div>
                   <div className="flex items-start mt-10">
                    <FaPhone  size={25} className=""/>
                    <h5 className="font-medium text-[17px] sm:text-[17px] md:text-[19px] tracking-wide ml-3"> Our Contacts:</h5>
                    </div>

                    <div className="flex flex-col sm:flex-col md:flex-row  justify-between mt-5">
                        <div className="w-[100%] sm:w-[100%] md:w-[50%] font-medium text-[19px]">
                            <h3>Mobile</h3>
                            <p className="mt-3 italic text-[17px] sm:text-[17px] md:text-[20px]">984 2567 219</p>
                            <p className="mt-3 italic text-[17px] sm:text-[17px] md:text-[20px]">982 6756 267</p>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[50%] font-medium text-[19px]">
                            <h3 className="mt-4 sm:mt-4 md:mt-0">Landline</h3>
                            <p className="mt-3 italic text-[17px] sm:text-[17px] md:text-[20px]">01 4738972</p>
                        </div>
                    </div>

                    <div className="flex items-start mt-10">
                    <MdAccessTimeFilled    size={25} className=""/>
                    <h5 className="font-medium text-[17px] sm:text-[17px] md:text-[19px] tracking-wide ml-3"> Our Service Time:</h5>
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-row justify-between mt-5">
                        <div className="w-[100%] sm:w-[100%] md:w-[50%] font-medium text-[19px]">
                            <h3 className="uppercase text-[17px] sm:text-[17px] md:text-[20px]">Mon - Fri</h3>
                            <p className="mt-3 italic text-[17px] sm:text-[17px] md:text-[20px]">10 AM - 8 PM</p>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[50%] font-medium text-[19px]">
                            <h3 className="uppercase mt-4 sm:mt-4 md:mt-0 text-[17px] sm:text-[17px] md:text-[20px]">Sat - Sun</h3>
                            <p className="mt-3 italic text-[17px] sm:text-[17px] md:text-[20px]">Closed</p>
                        </div>
                    </div>
                   </div>

                   <div className="my-10 sm:my-10 md:my-32">
                    <h2 className="text-[16px] sm:text-[16px] md:text-[20px] text-white font-primary-head font-normal">
                        Get in Touch at Social Media</h2>
                    <div className="flex flex-wrap mt-5">
                    <NavLink to='' target="_"><FaFacebookSquare size={35} className="mr-3" /></NavLink>
                    <NavLink to='' target="_"><FaInstagramSquare size={35} className="mr-3" /></NavLink>
                    <NavLink to='' target="_"><AiFillTikTok size={37} /></NavLink>
                    </div>
                    <div>

                    </div>

                   </div>

                </div>

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[65%] ml-0 sm:ml-0 md:ml-0 lg:ml-14 xl:ml-14">
                    <form onSubmit={formHandel}>
                       
                       <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 mt-8">

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='name' className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">First Name <br/>
                        <input 
                            onChange={(e) => {
                                setName(e.target.value);
                                }
                            }
                            type='text' id="name" placeholder='Enter Your First Name' 
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='last' className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">Last Name <br/>
                        <input 
                            onChange={(e) => {
                                setLast(e.target.value);
                                }
                            }
                            type='text' id="last" placeholder='Enter Your Last Name'
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor='email' className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">Email <br/>
                        <input 
                            onChange={(e) => {
                                setEmail(e.target.value);
                                }
                            }
                            type='text' id="email" placeholder='Enter Your Email' 
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor="countries" className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">What can do for you</label>
                            <select 
                            id="countries"
                            value={select}  // This ensures the selected option is reflected in the state
                            onChange={(e) => setSelect(e.target.value)}  // Updates state when selection changes

                            className="border-[1px] border-[#DFE2E6] focus:outline-0 rounded-lg block w-full  p-3 font-primary-head font-normal text-[16px] text-[#5c5c5c] mt-3">
                                <option  value='' >Choose </option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor='phone' className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">Phone Number <br/>
                        <input 
                            onChange={(e) => {
                                setPhone(e.target.value);
                                }
                            }
                            type='text' id="phone" placeholder='Enter Your Phone Number' 
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor='message' className="font-primary-head font-medium text-[16px] text-[#5c5c5c]">Message <br/>
                        </label>
                        <textarea id="message" rows="8" className="block p-3 w-full text-[16px] text-[#5c5c5c] bg-white rounded-lg shadow-sm border border-[#DFE2E6] focus:outline-0 mt-3" placeholder="Leave a message..."></textarea>
                        </div>
                       </div>

                       <button type='submit' className="bg-[#D95103] w-[250px] h-[60px] p-3 rounded-[25px] 
                       font-primary-head font-normal text-[16px] text-white mt-5 hover:bg-[#b74002] cursor-pointer">Send Message</button>


                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Seven