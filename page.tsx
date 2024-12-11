import React from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Productlist from '@/components/productlist'
import Productdetail from '@/components/productdetail'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div>
      <Hero/>  
      <Productlist/>
      <Productdetail/>
      
        </div>
  )
}

export default Page