import React from 'react'
import heroBg from "../assets/herobg.png"
import cooking from "../assets/cooking.png"
import burger from "../assets/burger.png"
import { motion } from "framer-motion"

const easeIn = {
    visible: { opacity: 1},
    hidden: { opacity: 0 },
};

const header = {
    visible: { opacity: 1, y : 0, scale : 1},
    hidden: { opacity: 0,y : -200, scale : 10 },
};

const headerImg = {
    visible: { opacity: 1, y : 0},
    hidden: { opacity: 0, y : -200 },
};

const orderButton = {
    visible: { opacity: 1, y : 0},
    hidden: { opacity: 0, y : -200 },
};

const heroDesc = {
    visible: { opacity: 1, scale : 1},
    hidden: { opacity: 0, scale : 0.9},
};

const Hero = () => {
  return (

        <motion.div className='h-[40vw] relative mt-3 bg-cover font-dm-sans' style={{backgroundImage: `url(${heroBg})`}} initial="hidden" animate="visible" variants={easeIn} transition={{duration : 2}}>
            {/* Text */}
            <div className='absolute bottom-[15%] left-[30%] flex flex-col gap-5'>
                <motion.div className='text-5xl font-bold flex items-center gap-3'>
                    <motion.span className='text-[#03081F]' initial="hidden" animate="visible" variants={header} transition={{duration : 1}}>
                        Something is <span className='text-[#02C543]'>Cooking</span>
                    </motion.span>
                    <motion.span initial="hidden" animate="visible" variants={headerImg} transition={{duration : 1, delay : 1}}>
                        <img src={cooking} className='w-[60px]' />
                    </motion.span>
                </motion.div>
                <motion.div className='text-xl text-[#2C2F24]' initial="hidden" animate="visible" variants={heroDesc} transition={{duration : 1, delay : 1}}>
                    Our job is to filling your tummy with delicious food and <span className='text-[#EB0029]'>with fast and free delivery</span>
                    <br/>
                    <span className='text-[#EB0029]'>Discover delectable cuisine and unforgettable moments</span> in our welcoming, culinary haven.
                </motion.div>
                <div>
                    <motion.button className="border border-[#2C2F24] rounded-3xl hover:text-[#121223] hover:bg-[#02C543] transition-colors duration-300 ease-in-out" initial="hidden" animate="visible" variants={headerImg} transition={{duration : 1}}>
                        <span className='flex items-center gap-2 font-bold px-5 py-2 transition-all duration-300 ease-in-out hover:text-white'>
                            <span>Order Now</span>
                            <img src={burger} className='w-[30px]' />
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* Bg Image */}
            

        </motion.div>

  )
}
export default Hero