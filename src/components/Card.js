import React, { useContext, useState } from 'react'
import cartDish from "../assets/cartDish.png"
import addIcon from "../assets/addIcon.png"
import removeIcon from "../assets/removeIcon.png"
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const Card = ({item}) => {

    const {cartItems, addToCart, removeFromCart, } = useContext(StoreContext);

    function addItemHandler(){
        addToCart(item._id);
    }

    function removeItemHandler(){
        removeFromCart(item._id);
    }

  return (
    <div className='w-[22%] font-dm-sans rounded-2xl py-4 transition-all duration-700 ease-in-out shadow-xl hover:scale-110'>
        {/* Img */}
        <div className='mx-auto'>
            <img src={item.image} className='object-center rounded-xl'/>
        </div>

        {/* Description */}
        <div className='flex flex-col mt-4 px-2'>
            {/* head and Rating */}
            <div>
                <div className='text-xl font-semibold text-[#391713]'>
                    {item.name}
                </div>
                {/* Rating */}
                <div></div>
            </div>

            {/* About Food */}
            <div className='text-[#391713]'>
                {item.description}
            </div>

            <div className='w-[100%] flex items-center justify-between mt-3'>
                {/* Price */}
                <div className="text-[#E95322] font-semibold text-xl">
                    ${item.price}
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    {/* Item Nos */}
                    <div>
                        {
                            !cartItems[item._id] ? <img onClick={addItemHandler} src={addIcon} className='w-[25px] h-[25px] cursor-pointer'/> : 
                                                        <div className='flex gap-2 bg-[#01040F] rounded-2xl'>
                                                            <img onClick={removeItemHandler} src={removeIcon} className='w-[25px] h-[25px] cursor-pointer'/>
                                                            <div className='text-white w-[20px] text-center'>{cartItems[item._id]}</div>
                                                            <img onClick={addItemHandler} src={addIcon} className='w-[25px] h-[25px] cursor-pointer'/>
                                                        </div>
                        }
                    </div>
                    {/* Cart Icon */}
                    <Link to="/cart">
                        <img src={cartDish} className='w-[25px] h-[25px]'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card