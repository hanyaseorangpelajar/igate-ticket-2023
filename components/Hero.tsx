import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-screen border-gray-400 border-dashed border-4 m-4 flex flex-col justify-center items-center">
      <div className="p-4">
        <h1>This could be Yours !!!</h1>
        <Image
          src="/ticket.webp"
          alt="ticket"
          width={800}
          height={800}
          className="shadow-solid shadow-black"
        />
      </div>
      <div className="p-4">
        <p className="text-4xl text-white font-extrabold mb-4">
          More About I-GATE
        </p>
        <Link href="/more" className="bg-white rounded text-black p-2">
          CLICK.me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
