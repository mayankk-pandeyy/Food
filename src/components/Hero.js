import React from 'react'
import heroBg from "../assets/herobg.png"
import cooking from "../assets/cooking.png"
import burger from "../assets/burger.png"

const Hero = () => {
  return (

        <div className='h-[40vw] relative mt-3 bg-cover font-dm-sans' style={{backgroundImage: `url(${heroBg})`}}>
            {/* Text */}
            <div className='absolute bottom-[15%] left-[30%] flex flex-col gap-5'>
                <div className='text-5xl font-bold flex items-center gap-3'>
                    <span className='text-[#03081F]'>
                        Something is <span className='text-[#02C543]'>Cooking</span>
                    </span>
                    <span>
                        <img src={cooking} className='w-[60px]' />
                    </span>
                </div>
                <div className='text-xl text-[#2C2F24]'>
                    Our job is to filling your tummy with delicious food and <span className='text-[#EB0029]'>with fast and free delivery</span>
                    <br/>
                    <span className='text-[#EB0029]'>Discover delectable cuisine and unforgettable moments</span> in our welcoming, culinary haven.
                </div>
                <div>
                    <button className="border border-[#2C2F24] rounded-3xl hover:text-[#121223] hover:bg-[#02C543] transition-colors duration-300 ease-in-out">
                        <span className='flex items-center gap-2 font-bold px-5 py-2 transition-all duration-300 ease-in-out hover:text-white'>
                            <span>Order Now</span>
                            <img src={burger} className='w-[30px]' />
                        </span>
                    </button>
                </div>
            </div>

            {/* Bg Image */}
            

        </div>

  )
}
export default Hero