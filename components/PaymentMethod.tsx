"use clinet"
import React from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';

function Hero() {
  return (
    <section className='h-screen flex items-center justify-center border-gray-400 border-dashed border-4 m-4'>
      <div className='items-center justify-center'>
        <h1>Pay Here ...</h1>
        <Image src='/qris-method.png' alt='qris-qr' width={250} height={250} className='shadow-solid shadow-white'/>
      </div>
    </section>
  );
}

export default Hero;
