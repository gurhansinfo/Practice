import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'


const Pages = () => {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/product' element={< Product/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Pages