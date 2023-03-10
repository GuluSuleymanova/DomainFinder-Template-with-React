import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../Pages/About/About'
import Detailpage from '../../Pages/Detail/Detailpage'
import Home from '../../Pages/Home/Home'
import Results from '../../Pages/Results/Results'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/results/:idd' element={<Detailpage />} />

      </Routes>

    </>
  )
}

export default AppRoutes