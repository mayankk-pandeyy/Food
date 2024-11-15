import React, { useState } from 'react'
import Hero from '../components/Hero'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';
import Count from '../components/Count';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div className='flex flex-col gap-10'>
        <Hero/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Count/>
    </div>
  )
}

export default Home