import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center border-gray-400 border-dashed border-4 m-4">
      <div className="items-center justify-center">
        <h1>Pay Here ...</h1>
        <Image
          src="/qris-method.jpg"
          alt="qris-qr"
          width={250}
          height={250}
          className="shadow-solid shadow-black border-2"
        />
        <br></br>
        <h1 className="text-center text-xl">FARREL STORE666</h1>
      </div>
    </section>
  );
}

export default Hero;
