

import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo Icon.png'
import cart from '../public/Buy 2.svg'

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'], // You can add other subsets like 'latin-ext' if necessary
  weight: ['400', '700'], // You can specify which weights you need
  display: 'swap', // This helps with font rendering performance
});

const Header = () => {
  return (
    <div>
      <div className="w-[1920px] h-[45px] bg-[#272343] pl-[300px] pt-[14px]">
        <div className="flex justify-between items-center px-4">
          <p className="text-[#FFFFFF] text-sm">Free shipping on all orders over $50</p>
          <div className="flex space-x-6 text-yellow-50 text-sm pr-[300px]">
            <a href="#eng" className="hover:underline">Eng</a>
            <a href="#faqs" className="hover:underline">Faqs</a>
            <a href="#help" className="text-[#FFFFFF] hover:underline">Need Help</a>
          </div>
        </div>
      </div>
      {/* second div */}
    <div className="w-[1920px]  h-[84px] bg-[#F0F2F3]">
      <div className='flex justify-evenly'>
        {/* Logo and Text Section */}
        <div className="flex pl-[280px] m-[20px] space-x-2 ">
          <Image 
            src={logo} 
            alt="logo-icon" 
            height={40} 
            width={40} 
          />
          <p className={`${inter.className} text-[26px] font-medium text-[#272343]`}>
            Comforty
          </p>
        </div>

        {/* Other header content can go here */}
        <div className='w-[120px] h-[44px] bg-white mx-auto m-[20px] flex '>
          
        <Image 
            src={cart} 
            alt="cart-icon" 
            height={22} 
            width={22} 
            className='m-[8px] '
          />
          <p className='text-[12px] font-medium m-[12px]'>Cart</p>
         
      

          <div className='h-[20px] w-[20px] rounded-full bg-blue-700 m-[12px] flex items-center justify-center text-[10px] md:text-[14px] font-medium text-white'>2</div>

        </div>
      </div>

    </div>

   
{/* third header */}

<div className="w-[1920px]  h-[74px] bg-[#FFFFFF]
">
  <ul className="flex space-x-6 pl-[300px] pt-5"> {/* Adjusted padding to align items better */}
    <li>
      <Link href="/Home" className="text-blue-500 hover:underline">
        Home
      </Link>
    </li>
    <li>
      <Link href="/Productpage" className="text-blue-500 hover:underline">
        Shop
      </Link>
    </li>
    <li>
      <Link href="/Product" className="text-blue-500 hover:underline">
        Product
      </Link>
    </li>
    <li>
      <Link href="/Pages" className="text-blue-500 hover:underline">
        Pages
      </Link>
    </li>
    <li  >
      <Link href="/About" className="text-blue-500 hover:underline ">
        About
      </Link>
    </li>
    
    {/* Contact link with margin-left auto */}
    <li  > {/* This will push the Contact link to the far right */}
      <Link href="/Contact" className="text-blue-500 hover:underline mr-[300px] ">
        Contact: (808) 555-0111
      </Link>
    </li>
  </ul>
</div>


      




      
    </div>
  )
}

export default Header



{/* <div className='w-[px] h-[px]'>

</div> */}
// bg-[#FFFFFF]