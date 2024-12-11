// import React from 'react'
// import chair from '../public/Product Image.svg'
// import Image from 'next/image'
// import { Inter } from 'next/font/google';
// const inter = Inter({
//     subsets: ['latin'], // You can add other subsets like 'latin-ext' if necessary
//     weight: ['400', '700'], // You can specify which weights you need
//     display: 'swap', // This helps with font rendering performance
//   });



    

//     const Hero = () => {
//       return (
//         <div className=" w-[1321px]  h-[850px]  mx-auto mt-5 bg-[#F0F2F3] ">
//             <div className='w-[557px] h-[377] bg-white '>
//                 <div>
//                 <p>Welcome to chairy</p>
//                 <p className={`${inter.className} text-[60px] font-bold `}>
//   Best Furniture <br /> Collection for your <br /> interior
// </p>
// <p className='w-[171px] h-[52px] bg-[#029FAE] text-center pt-3'>Shop Now</p>
// </div>
// </div>

//           <div className='flex-col' >  
            
//             <Image 
//             src={chair} 
//             alt="logo-icon" 
//             height={434} 
//             width={584} 
//             className=''
//           />


//             </div>
            

         
//         </div>
//       )
//     }
    
//     export default Hero;
    

import React from 'react';
import chair from '../public/Product Image.svg';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Hero = () => {
  return (
    <div className="w-[1321px] h-[850px] mx-auto mt-11  bg-[#F0F2F3]">
      <div className="  items-center  justify-start pt-24 pl-10">
        <p className="text-lg font-medium">Welcome to Chairy</p>
        <p className={`${inter.className} text-[60px] font-bold `}>
          Best Furniture <br /> Collection for your <br /> interior
        </p>
        <p className="w-[171px] h-[52px] bg-[#029FAE] text-center pt-5 rounded-md">
          Shop Now
        </p>
      

      {/* Image Section */}
      
        <Image 
          src={chair} 
          alt="Chair" 
          height={584} 
          width={434} 
          className="ml-96  "
        />
        
      </div>
      </div>
    
    
  );
}

export default Hero;
