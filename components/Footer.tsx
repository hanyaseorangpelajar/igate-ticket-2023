import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-end">
        <a href="https://wa.me/6282242118541">
          <Image src="/whatsapp.png" alt="logo" width={20} height={20} />
        </a>
        <p className="mr-4 pl-2">Tera</p>
        <a href="https://wa.me/6281375264858">
          <Image src="/whatsapp.png" alt="logo" width={20} height={20} />
        </a>
        <p className="mr-4 pl-2">Rosa</p>
      </div>
    </footer>
  );
}

export default Footer;
