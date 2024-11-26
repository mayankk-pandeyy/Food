import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { IoFastFood } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const easeIn = {
    visible: { opacity: 1},
    hidden: { opacity: 0 },
};

const logoAn = {
    visible : {opacity : 1, x : 0},
    hidden : {opacity : 0, x : -100}
}

const NavConAn1 = {
    visible : {opacity : 1, y : 0},
    hidden : {opacity : 0, y : -100}
}

const NavConAn2 = {
    visible : {opacity : 1, y : 0},
    hidden : {opacity : 0, y : -100}
}

const NavConAn3 = {
    visible : {opacity : 1, y : 0},
    hidden : {opacity : 0, y : -100}
}

const NavConAn4 = {
    visible : {opacity : 1, x : 0},
    hidden : {opacity : 0, x : 100}
}

const NavConAn5 = {
    visible : {opacity : 1, x : 0},
    hidden : {opacity : 0, x : 150}
}

const NavConAn6 = {
    visible : {opacity : 1, x : 0},
    hidden : {opacity : 0, x : 200}
}


const Navbar = ({setShowCard}) => {

    const [activeMenu, setActiveMenu] = useState('Menu');

    function setMenuHandler(value){
        setActiveMenu(value);
    }

  return (
    <motion.div className='mx-auto mt-1 w-[99%] bg-[#121223] font-dm-sans rounded-full' initial="hidden" animate="visible" variants={easeIn} transition={{duration : 1}}>
        <motion.div className='w-[90%] mx-auto py-[20px] text-white flex justify-between items-center'>
            {/* Logo */}
            <motion.div className='w-[80px] cursor-pointer' initial="hidden" animate="visible" variants={logoAn} transition={{duration : 0.5}}>
                <Link to="/">
                    <img src={logo}/>    
                </Link>
            </motion.div>


            {/* Menu */}
            <motion.div className='flex w-[40%] items-center'>
                <motion.div className='w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("Home")} initial="hidden" animate="visible" variants={NavConAn1} transition={{duration : 0.5}}>
                    <Link to="/">
                        <motion.span className={activeMenu==="Home" ? "text-[#F58D1D] text-xl " : ""}>
                            Home
                        </motion.span>
                    </Link>
                </motion.div>
                <motion.div className='w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("Menu")} initial="hidden" animate="visible" variants={NavConAn2} transition={{duration : 0.7}}>
                    <Link to="/menu">
                        <motion.span className={activeMenu==="Menu" ? "text-[#F58D1D] text-xl " : ""}>
                            Menu
                        </motion.span>
                    </Link>
                </motion.div>
                <motion.div className='w-[150px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("mobile")} initial="hidden" animate="visible" variants={NavConAn3} transition={{duration : 0.9}}>
                    <span className={activeMenu==="mobile" ? "text-[#F58D1D] text-xl " : ""}>
                        Mobile-App
                    </span>
                </motion.div>
                <motion.div className='w-[150px] transition-transform duration-300 ease-in-out hover:scale-110 text-center cursor-pointer' onClick={()=>setMenuHandler("contact")} initial="hidden" animate="visible" variants={NavConAn3} transition={{duration : 1.1}}>
                    <motion.span className={activeMenu==="contact" ? "text-[#F58D1D] text-xl" : ""}>
                        Contact Us
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Right */}
            <div className='flex w-[15%] items-center justify-between'>
                <motion.div className='' initial="hidden" animate="visible" variants={NavConAn4} transition={{duration : 1.1}}>
                    <IoFastFood className='scale-125 text-[#F58D1D] cursor-pointer'/>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={NavConAn5} transition={{duration : 1.1}}>
                    <Link to="/cart">
                        <FaShoppingCart className='scale-125 text-[#F58D1D] cursor-pointer'/>
                    </Link>
                </motion.div>
                <div>
                    <motion.button className="border border-[#F58D1D] rounded-3xl hover:bg-[#F58D1D] hover:text-[#121223] transition-colors duration-300 ease-in-out" initial="hidden" animate="visible" variants={NavConAn6} transition={{duration : 1.1}} onClick={()=>(setShowCard(true))}>
                        <span className='px-8 text-sm py-2 inline-block transition-transform duration-300 ease-in-out transform hover:scale-125'>
                            Sign In
                        </span>
                    </motion.button>
                </div>

            </div>
        </motion.div>
    </motion.div>
  )
}

export default Navbar