import React from "react";
import { useState } from 'react';

function TwoC() {
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
        <div className="w-[100%] mt-10 px-4 sm:px-4 md:px-4 lg:px-0 flex flex-col sm:flex-col md:flex-col lg:flex-row">

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]  h-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4809055667506!2d85.34317037433892!3d27.6715277270724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1737919238135!5m2!1sen!2snp" width="100%" height="1150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[400px] sm:h-[400px] lg:h-[1282px] xl:h-[1155px]"></iframe>
            </div>

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] bg-[#FAFBFB] py-10 px-1.5 sm:px-1.5 md:px-1.5 lg:px-10 mb-6 sm:mb-6 md:mb-6 lg:mb-0">
                <div className="bg-white rounded-[15px] px-2.5 sm:px-2.5 md:px-2.5 lg:px-11 py-4 sm:py-4 md:py-4 lg:py-11 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] ">
                    <h2 className='font-primary-head font-bold text-[27px] sm:text-[27px] md:text-[31px] lg:text-[31px] tracking-wide'>
                        Contact <span className='text-[#D95103] font-bold'>Us</span></h2>
                    <p className='font-primary-head font-normal text-[#7c7c7c] text-[16px] tracking-wide leading-[35px] mt-5'>If you have any queries, send us a message. Our Friendly Team would love to hear from you</p>
                    <div>
                    <form onSubmit={formHandel}>
                       
                       <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-10 mt-8">

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%]">
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

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%]">
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
                            <select id="countries"
                             value={select}  // This ensures the selected option is reflected in the state
                             onChange={(e) => setSelect(e.target.value)}  // Updates state when selection changes
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 rounded-lg block w-full  p-3 font-primary-head font-normal text-[16px] text-[#5c5c5c] mt-3">
                                <option value=''>Choose </option>
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

                       <button type='submit' className="bg-[#0C6967] w-[250px] h-[60px] p-3 rounded-[25px] 
                       font-primary-head font-normal text-[16px] text-white mt-5 hover:bg-[#b74002] cursor-pointer">Send Message</button>


                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default TwoC