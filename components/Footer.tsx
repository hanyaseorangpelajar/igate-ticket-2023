import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center m-4">
          {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
          <p>Made with Full of &#x1F496; by I-GATE</p>
        </div>
        <div className="flex m-4">
          <p>Contact:</p>
          <a href="https://wa.me/6282242118541">
            <p className="ml-2 hover:bg-white hover:text-black hover:rounded">
              Tera
            </p>
          </a>
          <p className="ml-2">/</p>
          <a href="https://wa.me/6281375264858">
            <p className="ml-2 hover:bg-white hover:text-black hover:rounded">
              Rosa
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
