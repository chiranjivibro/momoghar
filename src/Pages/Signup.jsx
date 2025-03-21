import React, { useState } from 'react';
import Signin from '../assets/signin.jpg';

function Signup() {
const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('91'); // Default to India (+91)

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add validation to check if passwords match before submission
    if (password !== confirmPassword ) {
      return alert('Passwords do not match!');
      return;
    }

    if (password.length < 8) {
        return alert("Password must be eight character");
        return;
    }

    // Handle signup logic here (e.g., send data to server)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', `+${countryCode} ${phoneNumber}`); 

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber(''); 
  };
    return(
        <>
        <div className='w-[100%] m-auto px-4 pt-[131px] sm:px-4 sm:pt-[131px] md:px-4 md:pt-[131px] lg:px-4 lg:pt-[141px] xl:px-14 xl:pt-[151px] py-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-16 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center items-center font-primary-head'>

          <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%] m-auto flex justify-center'>
              <div style={{backgroundImage:`url(${Signin})`}}
                              className='relative w-full h-[200px] sm:h-[200px] md:h-[350px] lg:h-[400px] xl:h-[819px] bg-cover bg-no-repeat bg-center'/>
          </div>

          <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%] m-auto py-12 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 flex items-center justify-center h-auto bg-gray-100 font-primary-head">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-[16px] font-medium text-gray-700">
      Username*
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter Username"
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[16px] font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
      name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter Email"
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-[16px] font-medium text-gray-700">
                    Password*
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
      required
                    placeholder="Enter Password"
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-[16px] font-medium text-gray-700">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm Password"
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
                  />
                </div>
                <div>
                  <label htmlFor="countryCode" className="block text-[16px] font-medium text-gray-700">
                    Country Code
      </label>
                  <select
                    id="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
                  >
                    <option value="91">+91 (India)</option> 
                    {/* Add more country codes as needed */}
                    <option value="1">+1 (US)</option>
                    <option value="44">+44 (UK)</option>
                    <option value="977">+977 (NEPAL)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-[16px] font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    placeholder="Enter Phone Number"
                    className="mt-1 p-2 w-full rounded-md border-[1px] border-[#DFE2E6] focus:outline-0"
      />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#0C6967] hover:bg-[#0C6967] cursor-pointer text-white text-[17px] tracking-wide font-bold py-2 px-4 rounded"
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
        </>
    );
}
export default Signup