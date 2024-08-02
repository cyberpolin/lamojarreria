import React from 'react';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className='bg-blue-400 rounded-full aspect-square bg-cover bg-center w-2/3' style={{
      backgroundImage: 'url("/img/mojarra-frita-la-mojarreria.png")',
      
    }}>
      {/* <Image alt='mojarra frita' width={400} height={400} src="/img/mojarra-frita-la-mojarreria.png" /> */}
    </div>
  )
}
export default Carousel;