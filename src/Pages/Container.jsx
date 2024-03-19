import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/default/Home'
import About from '../Component/default/About'
import Contact from '../Component/default/Contact'
import Login from '../Component/auth/Login'
import Register from '../Component/auth/Register'
import Pnf from '../Component/default/Pnf'
import Store from '../Screen/Product/Store'
import ProductCart from '../Screen/Cart/ProductCart'
import ProductChekout from '../Screen/Checkout/ProductChekout'

function Container() {
  return (
    <Routes>
           <Route path={`/`} element={<Home/>}>
                  <Route path={`/`} element={<Store/>}/>
                  <Route path={`/cart`} element={<ProductCart/>}/>
                  <Route path={`/checkout`} element={<ProductChekout/>}/>
           </Route>
           <Route path={`/about`} element={<About/>}/>
           <Route path={`/contact`} element={<Contact/>}/>
           <Route path={`/login`} element={<Login/>}/>
           <Route path={`/register`} element={<Register/>}/>
           <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
  )
}

export default Container
