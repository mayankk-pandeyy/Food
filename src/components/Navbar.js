import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { IoFastFood } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState('Menu');

    function setMenuHandler(value){
        setActiveMenu(value);
    }

  return (
    <div className='mx-auto mt-1 w-[99%] bg-[#121223] font-dm-sans rounded-full'>
        <div className='w-[90%] mx-auto py-[20px] text-white flex justify-between items-center'>
            {/* Logo */}
            <div className='w-[80px] cursor-pointer'>
                <img src={logo}/>    
            </div>


            {/* Menu */}
            <div className='flex w-[40%] items-center'>
                <div className='w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("Home")}>
                    <span className={activeMenu==="Home" ? "text-[#F58D1D] text-xl " : ""}>
                        Home
                    </span>
                </div>
                <div className='w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("Menu")}>
                    <span className={activeMenu==="Menu" ? "text-[#F58D1D] text-xl " : ""}>
                        Menu
                    </span>
                </div>
                <div className='w-[150px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("mobile")}>
                    <span className={activeMenu==="mobile" ? "text-[#F58D1D] text-xl " : ""}>
                        Mobile-App
                    </span>
                </div>
                <div className='w-[150px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("contact")}>
                    <span className={activeMenu==="contact" ? "text-[#F58D1D] text-xl" : ""}>
                        Contact Us
                    </span>
                </div>
            </div>

            {/* Right */}
            <div className='flex w-[15%] items-center justify-between'>
                <div className=''>
                    <IoFastFood className='scale-125 text-[#F58D1D] cursor-pointer'/>
                </div>
                <div>
                    <FaShoppingCart className='scale-125 text-[#F58D1D] cursor-pointer'/>
                </div>
                <div>
                    <button className="border border-[#F58D1D] rounded-3xl hover:text-[#121223] hover:bg-[#F58D1D] transition-colors duration-300 ease-in-out">
                        <span className='px-5 py-2 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125'>
                            Sign In
                        </span>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar