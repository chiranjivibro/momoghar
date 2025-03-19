import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect,user} = useAuth0();
    console.log(user)
    return(
        <>
         <div className="flex items-center justify-center py-11 px-4 sm:px-4 md:px-4 max-h-screen bg-gray-100 font-primary-head">
      <form className="bg-white p-6 rounded-md shadow-lg border border-gray-300 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <label htmlFor="email" className="block text-[16px] font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border-[1px] border-[#DFE2E6] focus:outline-0 px-3 py-2 rounded-md mb-4"
          placeholder="Enter your Email"
        />

        <label htmlFor="password" className="block text-[16px] font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full border-[1px] border-[#DFE2E6] focus:outline-0  px-3 py-2 rounded-md mb-4"
          placeholder="Enter your Password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition mb-4 cursor-pointer">
Login
        </button>

        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-red-600 transition cursor-pointer"
          onClick={() => loginWithRedirect()}
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>
      </form>
    </div>
        </>
    );
}
export default Login