import React from 'react'
import CountUp from 'react-countup';
import footerImg from "../assets/footerImg.png"


const Count = () => {

    const count = [
        {
            "name" : "Registered Riders",
            "num" : "546"
        },
        {
            "name" : "Orders Delivered",
            "num" : "789900"
        },
        {
            "name" : "Restaurants Partnered",
            "num" : "690"
        },
        {
            "name" : "Food items",
            "num" : "17457"
        },
        
    ]

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-20 font-dm-sans mb-20'>
        <div className='flex w-[100%] px-16 bg-[#FC8A06] mx-auto py-4 justify-between rounded-xl'>
            {
                count.map((item, index)=> {
                    return (
                        <div key={index} className={index!=count.length-1 ? "border-r-2 pr-16 border-[#D9D9D9] text-center text-[#FFF]" : "text-center text-[#FFF]"}>
                            <div className='text-[30px] w-[180px]'>
                                <span>
                                        <CountUp
                                            start={item.num-500}
                                            end={item.num}
                                            duration={4}
                                        />
                                        <span>+</span>
                                    </span>
                            </div>
                            <div className='text-[20px] font-semibold'>{item.name}</div>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <img src={footerImg} className='bg-[#FFC3BD] rounded-2xl'/>
        </div>
    </div>
  )
}

export default Count



// className='text-center text-[#FFF]' 