import React, { useContext } from 'react'
import topDishes from "../assets/topDishes.png"
import { StoreContext } from '../context/StoreContext'
import Card from './Card'

const FoodDisplay = ({category}) => {

    const {foodList} = useContext(StoreContext)

  return (
    <div>
        <div className='w-[90%] mx-auto flex flex-col gap-4 font-dm-sans'>
            <div className='flex items-center gap-2'>
                <img src={topDishes} className='w-[40px]'/>
                <span className='text-3xl font-bold text-[#03081F]'>
                    Top Dishes Near You
                </span>
            </div>

            <div className='w-[100%] gap-5 flex flex-wrap justify-between'>
                {
                    foodList.map((item, index)=>{
                        if(category === "All" || category === item.category){
                            return (<Card item={item}/>)
                        }else{

                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default FoodDisplay