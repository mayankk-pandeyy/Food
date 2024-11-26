import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cartItems, foodList, removeFromCart, cartItemsCount} = useContext(StoreContext);

  return (
    <div className='bg-[#0D1116] mt-2 mb-2'>

      <div>
        {
          cartItemsCount === 0 ? (<div className='text-[#D0DEFF] font-poppins text-center h-[20vw] flex flex-col gap-5 justify-center'>
            <div className='text-3xl'>
              Uh Oh! Nothing to show here
            </div>
            <div>
              <div className='text-2xl font-bold text-[#4A77FF]'>
                Let's Add Something in the Cart...
              </div>
              <Link to="/menu">
                <button className='border border-[#D0DEFF] px-4 py-2 mt-2 rounded-3xl'>Go to Cart</button>
              </Link>
            </div>
          </div>) : 
          (
            <div>
              <div className='w-[90%] mx-auto font-poppins py-5'>
              {/* Headings */}
              <table className='w-[100%] text-[#fff] text-xl font-semibold'>
                <tr className='w-[100%] flex justify-between border-b-2 border-[#FC8019] border-dashed'>
                  <td className='w-[15%]  text-center py-3'>Item</td>
                  <td className='w-[15%]  text-center py-3'>Item Name</td>
                  <td className='w-[15%]  text-center py-3'>Price</td>
                  <td className='w-[15%]  text-center py-3'>Quantity</td>
                  <td className='w-[15%]  text-center py-3'>Total</td>
                  <td className='w-[15%]  text-center py-3'>Delete Item</td>
                </tr>
              </table>
      
              {/* Content */}
              <table className='w-[100%]'>
                {
                  foodList.map((item, index)=>{
                    if(cartItems[item._id]>0){
                      return (
                        <tr className='w-[100%] flex items-center justify-between py-5 border-b text-[#fff] border-dashed'>
                          <td className='w-[15%]  text-center'>{<img src={item.image} className='w-[50px] h-[50px] object-cover object-center rounded-full border-2 border-orange-600 mx-auto'/>}</td>
                          <td className='w-[15%]  text-center font-bold'>{item.name}</td>
                          <td className='w-[15%]  text-center'>{item.price}</td>
                          <td className='w-[15%]  text-center'>{cartItems[item._id]}</td>
                          <td className='w-[15%]  text-center'>{cartItems[item._id] * item.price}</td>
                          <td className='w-[15%]  text-center cursor-pointer'>remove</td>
                        </tr>
                      )
                    }
                  })
                }
              </table>
            </div>
            <div className='w-[90%] mx-auto font-poppins py-5 flex justify-between'>
        {/* Left */}
        <div className='w-[30%] flex flex-col text-[#D0DEFF]'>
          <div className='text-[#FC8019] font-bold text-2xl'>
            Cart Totals
          </div>
          <table className='w-[100%] mx-auto mt-5 text-xl'>
            <tr className='w-[100%] flex justify-between mx-4 border-b py-2'>
              <td className='font-semibold'>Subtotal</td>
              <td>{}</td>
            </tr>
            <tr className='w-[100%] flex justify-between  border-b mx-4 py-2'>
              <td>Delivery Fee</td>
              <td className='text-center'>$5</td>
            </tr>
            <tr className='w-[100%] flex justify-between mx-4 py-2'>
              <td>Total</td>
              <td className='text-center'>$6</td>
            </tr>
          </table>
        </div>



        {/* Right */}
        <div className='text-[#D0DEFF] w-[50%] pt-9 flex flex-col gap-4 justify-end'>
          <div className='text-xl'>Have a promo code? Enter here</div>
          <div className='w-[60%] border'>
            <input
              placeholder="Enter Your Email"
              type="text"
              className="bg-transparent outline-none py-2 px-3 w-[70%]"
            />
            <button className='text-center  bg-[#B170F9] py-2 w-[30%] font-semibold'>Submit</button>
          </div>
        </div>
      </div>
          </div>
          )
        }
      </div>

      
    </div>
  )
}

export default Cart