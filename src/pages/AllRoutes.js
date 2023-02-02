import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart'
import LandingPage from './Landing/LandingPage'
import NotFound from './NotFound/NotFound'

const AllRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default AllRoutes