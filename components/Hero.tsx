import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className='h-screen border-gray-400 border-dashed border-4 m-4 flex flex-col justify-center items-center'>
      <div className='p-4'>
        <Image src='/ticket.webp' alt='ticket' width={800} height={800} />
      </div>
      <div className='p-4'>
        <p className='text-4xl text-white font-extrabold mb-4'>FAQ w/ Do's & Dont's goes Here</p>
      </div>
    </section>
  );
}

export default Hero;
