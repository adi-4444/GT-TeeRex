import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart'
import LandingPage from './Landing/LandingPage'

const AllRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </Router>
   )
}

export default AllRoutes