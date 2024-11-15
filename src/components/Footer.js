import React from 'react'
import Count from './Count'
import logo from "../assets/Logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='bg-[#0D0D0D] w-[100%] py-36 font-dm-sans mt-20'>
            <div className='flex justify-between w-[80%] mx-auto'>
                {/* 1st Column */}
                <div className='flex flex-col gap-5 w-[30%]'>
                    <div className='text-[#F65F5F] text-2xl font-bold'>Food</div>
                    <div className='text-[#F6F5F5]'>
                        Our job is to filling your tummy with delicious food and  with fast and free delivery.
                    </div>
                    <div className='text-[#FDCE77] flex gap-6'>
                        <FaFacebookF className='scale-125'/>
                        <FaInstagram className='scale-125'/>
                        <FaTwitter className='scale-125'/>
                    </div>
                </div>

                {/* 2nd Column */}
                <div className='flex flex-col gap-4 mt-4'>
                    <div className='text-[#F65F5F] text-lg font-medium'>
                        About Us
                    </div>

                    <div className='text-[#F6F5F5]'>
                        <div>About Us</div>
                        <div>Services</div>
                        <div>Contact</div>
                        <div>Company</div>
                    </div>
                </div>

                {/* 3rd Column */}
                <div className='flex flex-col gap-4 mt-4'>
                    <div className='text-[#F65F5F] text-lg font-medium'>
                        Company
                    </div>

                    <div className='text-[#F6F5F5]'>
                        <div>Partnership</div>
                        <div>Terms of Use</div>
                        <div>Privacy</div>
                        <div>Sitemap</div>
                    </div>
                </div>

                {/* 4th Column */}
                <div className='flex flex-col gap-4 mt-4 w-[25%]'>
                    <div className='text-[#F65F5F] text-lg font-medium'>
                        Get in touch
                    </div>

                    <div className='text-[#F6F5F5] mt-5 flex flex-col gap-5'>
                        <div className='text-sm'>
                            We'd love to hear from you! Reach out for support, feedback, or just to say hi.
                        </div>
                        
                        <div className='flex gap-2'>
                            <input
                                type='text'
                                placeholder='Email'
                                className='bg-[#252525] px-5 py-1 rounded-full text-[#E5E5E5] text-sm outline-none'
                            />
                            <button className='bg-[#F65F5F] text-[#0D0D0D] text-sm px-2 py-2 rounded-full'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer