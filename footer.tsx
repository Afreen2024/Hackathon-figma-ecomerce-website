import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo Icon.png'

import fb from '../public/Facebook---Negative 2.svg'
import insta from '../public/Instagram 1.png'
import pin from '../public/Pinterest---Negative 1.png'
import youtube from '../public/YouTube---Negative 1.png'


const Footer = () => {
  return (
    <div className='w-[1920px] h-[418px]  flex justify-evenly mt-5  pt-20 border-2 border-slate-400 '>

<div className='w-[350px] h-[198px] flex-col '>
    <div className='w-[168px] h-[40px]  '>
    <Image 
            src={logo} 
            alt="logo-icon" 
            height={40} 
            width={40} 
          />
              </div>

          <p className='text-[26px]'>Comforty </p>
          <div className='  flex-row '>
           <p className='text-[16px]'> Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          Cras egestas purus</p>

          <div className='w-[350px] h-[198px] '>
            <li className='flex space-x-3'>
            <Image src={fb} alt="chair-pic" />
            <Image src={pin} alt="chair-pic" />
            <Image src={insta} alt="chair-pic" />
            <Image src={youtube} alt="chair-pic" />
            </li>
          </div>


           </div>
          

      

    
    </div>

    <div className='w-[105px] h-[203px] '>
        <li className='list-none'>Category</li>
        <p>Sofa <br/>Wing Chair<br/>Desk Chair<br/>wooden Chair<br/>Park Bench</p>

    </div>


    <div className='w-[156px] h-[143px] '>
        <p>Support</p>
        <p>Help & Support
Tearms & Conditions
Privacy Policy
Help</p>
    </div>


    <div className='w-[424px] h-[142px] '>
        <p>Newsletter</p>
        <p className=' w-[285px] h-[46px]'> your email</p>
        <p className='w-[127px] h-[46px] bg-[#029FAE] rounded-sm pt-2 pl-4'> Subscribe</p>
    </div>


    </div>
  ) 
}

export default Footer