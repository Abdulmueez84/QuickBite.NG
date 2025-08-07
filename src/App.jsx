import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import Cart from './content/Cart'
import Footer from './components/Footer'
import { productCartegories } from '../src/content/index';

const App = () => {
  const [productId, setProductId] = useState('');
  const [cartAllProducts, setCartAllProducts] = useState([])

  useEffect(() => {
    const filteredObject = productCartegories.filter((product) => product.id == productId);
    setCartAllProducts([...cartAllProducts, ...filteredObject]);

  }, [productId])

  return (
    <>
      <Navbar cartAllProducts={cartAllProducts} />


      <Routes>
        <Route path='/' element={<Home setProductId={setProductId} />} />
        <Route path='/About.jsx' element={<About />} />
        <Route path='/Shop.jsx' element={<Shop setProductId={setProductId} />} />
        
        <Route path='/Blog.jsx' element={<Blog />} />
        <Route path='/Cart.jsx' element={<Cart cartAllProducts={cartAllProducts} setCartAllProducts={setCartAllProducts} />} />
      </Routes>

      {/* <Cart /> */}

      <Footer />
    </>
  )
}

export default App
