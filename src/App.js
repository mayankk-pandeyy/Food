import React from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-[100vw] bg-[#EAEDF1] min-h-[100vh] overflow-hidden'>
      <Navbar/>

      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Cart/>} path="/cart"/>
        <Route element={<PlaceOrder/>} path="/placeorder"/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App