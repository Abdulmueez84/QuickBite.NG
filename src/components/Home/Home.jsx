import React from 'react'
import HeroSection from './HomeContent/HeroSection'
import Categories from './HomeContent/Categories'
import Aroma from './HomeContent/Aroma'
import { Outlet, BrowserRouter as Route, Routes } from 'react-router-dom'
import Variety from './HomeContent/Variety'
import FastFood from './HomeContent/FastFood'
import Delivery from './HomeContent/Delivery'
import Testimonial from './HomeContent/Testimonial'
import Contact  from './HomeContent/Contact'
import Gallery from './HomeContent/Gallery'
import Newsletter from './HomeContent/Newsletter'



export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Aroma />
      <Variety />
      <FastFood />
      <Delivery />
      <Testimonial />
      <Contact />
      <Gallery />
      <Newsletter />
    </div>
  )
}
