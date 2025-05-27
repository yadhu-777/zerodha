import { useState,useEffect } from 'react'
import Navbar from './navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './footer'
import Home from './components/homepage/home'
import About from './components/about/About'
import Pricee from './components/pricing/pricing'
import Product from './components/products/product'
import Support from './components/support/support'
import Signup from './components/signup/signup'
import Login from './login/login'
import axios from "axios"


function App() {


  



  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Price' element={<Pricee/>}/>

<Route path='/Product' element={<Product/>}/>
<Route path='/Support' element={<Support/>}/>
<Route  path='/Login' element={<Login/>} />
</Routes>
    
     <Footer/>

</BrowserRouter>

 
    </>
  )
}

export default App
