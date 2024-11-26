import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { TbPasswordUser } from "react-icons/tb";
import { AiFillUnlock } from "react-icons/ai";



const Login = ({setShowLogin, setShowCard}) => {

  const [showPassword, setShowPassword] = useState(false);

  function showPasswordHandler(){
    setShowPassword(!showPassword);
  }


  return (
    <div className='relative w-[100vw] h-[100%] z-30'>
      {/* Background blur */}
      <div className='fixed w-[100vw] h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm'></div>
      {/* Card */}
      <div className='w-[30%] font-dm-sans px-8 py-5 fixed top-28 z-20 left-[40%] bg-[#F5CB58] rounded-2xl'>
        {/* Heading */}
        <div className='flex items-center justify-between'>
          <div className='text-[#03081F] text-2xl font-bold'>
            Welcome Back!
          </div>
          <div className='cursor-pointer text-xl' onClick={()=>setShowCard(false)}>
            <RxCrossCircled />
          </div>
        </div>

        {/* Input Fields */}
        <form className='mt-8 flex flex-col gap-3'>
          <div className='flex flex-col'>
            <label className='text-[#391713] font-semibold'>Email</label>
            <input type='text' placeholder='pandeyymayankk@gmail.com' className='px-4 py-1 rounded-xl text-[#03081F] outline-none'/>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#391713] font-semibold'>Set Password</label>
            <div className='flex items-center justify-between px-4 py-1 rounded-xl text-[#03081F] bg-white'>
              <input type={showPassword ? "text" : "password"} placeholder='Enter Password' className='w-full outline-none'/>
              {
                showPassword ? (<AiFillUnlock className='cursor-pointer' onClick={showPasswordHandler}/>) : (<TbPasswordUser className='cursor-pointer' onClick={showPasswordHandler}/>)
              }
            </div>
          </div>

          <div className='text-xs text-center'>
            By continuing, you agree to 
            <span className='text-[#E95322]'>Terms of Use</span> and <span className='text-[#E95322]'>Privacy Policy</span>.
          </div>
          <button className='bg-[#E95322] text-white rounded-2xl w-[50%] mx-auto hover:bg-[#02C543]'>
            <span className='px-5 py-2 text-sm inline-block transition-transform duration-300 ease-in-out transform hover:scale-125'>
              Login
            </span>
          </button>
        </form>

        {/* Signup Button */}
        <div className='flex items-center mt-6'>
          <p className='text-sm'>Don't have an account?</p>
          <button className='bg-[#028643] text-white rounded-2xl mx-auto' onClick={()=> setShowLogin(false)}>
            <span className='px-10 py-2 text-sm inline-block transition-transform duration-300 ease-in-out transform hover:scale-125'>
              Create Account
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login