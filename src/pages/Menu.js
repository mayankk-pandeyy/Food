import React from 'react'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import { useState } from 'react'

const Menu = () => {
    const [category, setCategory] = useState("All");
  return (
    <div className='mt-10'>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Menu