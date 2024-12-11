import React from 'react'
import Image from 'next/image';
import logo1 from '../public/Logo (1).png';
import logo2 from '../public/Logo (1).svg';
import logo3 from '../public/Logo (2).svg';
import logo4 from '../public/Logo (3).svg';
import logo5 from '../public/Logo (4).svg';
import logo6 from '../public/moz.svg';
import logo7 from '../public/Logo.svg'



const Productlist = () => {
  return (
    <div className='w-[1321px] h-[139px]  mt-10 mx-auto '>
    <ul className='flex justify-between  pt-9'>
      <li >
        <Image
          src={logo1}
          alt="4"
          height={57}
          width={63}
          className=''
        
        />
      </li>

      <li>
        <Image
          src={logo2}
          alt="Chair"
          height={87}
          width={87}
          className=''
        
        />
      </li>

      <li>
        <Image
          src={logo3}
          alt="Chair"
          height={58}
          width={60}
          className=''
        
        />
      </li>

      <li>
        <Image
          src={logo4}
          alt="Chair"
          height={50}
          width={60}
          className=''
        
        />
      </li>

      <li>
        <Image
          src={logo5}
          alt="Chair"
          height={60}
          width={60}
          className=''
        
        />
      </li>


      <li>
        <Image
          src={logo7}
          alt="Chair"
          height={58}
          width={58}
          className=''
        
        />
      </li>
      
      <li>
        <Image
          src={logo6}
          alt="Chair"
          height={60}
          width={60}
          className=''
        
        />
      </li>

     
    </ul>
  </div>
  )  
}

export default Productlist