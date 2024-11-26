import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Menu from './pages/Menu'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      {
        showCard ? (showLogin ? (<Login setShowLogin={setShowLogin} setShowCard={setShowCard}/>): (<Signup setShowLogin={setShowLogin} setShowCard={setShowCard}/>)) : ("")
      }
        <div className='w-[100vw] bg-[#EAEDF1] min-h-[100vh] overflow-hidden'>
        <Navbar setShowCard={setShowCard}/>

        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Cart/>} path="/cart"/>
          <Route element={<Menu/>} path="/menu"/>
          <Route element={<PlaceOrder/>} path="/placeorder"/>
        </Routes>

        <Footer/>
      </div>
    </div>
  )
}

export default App