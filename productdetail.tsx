import React from 'react'
import chair1 from '../public/chair1.png'
import chair2 from '../public/chair2.svg'
import chair3 from '../public/chair3.svg'
import chair4 from '../public/chair4.png'
import cart from '../public/Buy 3.svg'
import bgchair1 from '../public/bigChair1.svg'
import bgchair2 from '../public/bigChair2.png'
import bgchair3 from '../public/bigChair3.svg'




import Image from 'next/image'



const Productdetail = () => {
  return (
    <div>
<div className="w-[1321px] h-[461px]  mx-auto">
  <p className="text-white text-[32px] font-medium text-center ">Featured Products</p>
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair4} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>
      

    </div>
  </div>
</div>
{/* 3product */}
<div className="w-[1321px] h-[508px]  mx-auto">
  <p className="text-black text-[32px] font-medium pt-10 pb-10 text-center">Top categories</p>
  <div className="grid grid-cols-3  gap-5">

    <div className="h-[424px] w-[424px] ">
      
      <Image src={bgchair1} alt="chair-pic"/>  </div>
    
    <div className="h-[424px] w-[424px]">      <Image src={bgchair2} alt="chair-pic"/>  
    </div>
    <div className="h-[424px] w-[424px] ">      <Image src={bgchair3} alt="chair-pic"/>  </div>
    
    
  </div>
</div>

 {/* 2nd  */}
<div>
<div className="w-[1321px] h-[461px]  mx-auto">
  <p className="text-black text-[32px] font-medium text-center mt-24 mb-10">Our Products</p>
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair4} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
  </div>
  
</div>
</div> 

{/* 4div again */}

<div className="w-[1321px] h-[461px]  mx-auto">
  <p className="text-white text-[32px] font-medium text-center ">Featured Products</p>
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={bgchair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={bgchair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={bgchair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>
      

    </div>
  </div>
</div>


 
</div>




  )
}

export default Productdetail