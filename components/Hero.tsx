import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-full border-gray-400 border-dashed border-4 m-4 p-2 flex flex-col justify-center items-center">
      <h1 className="p-4 m-5 bg-white text-black rounded-xl text-transform: uppercase font-bold text-center">
        Start the journey, and make the new story
      </h1>
      <div className="p-4">
        <p className="m-2 p-2 bg-red-600 text-red rounded-xl text-transform: uppercase font-bold text-center">
          The online registration has been closed. We are currently validating
          the data and payments from all of you. Please wait for the
          confirmation email that will be sent via email. Thank you for your
          enthusiasm.
        </p>

        <p className="m-2 p-2 bg-white text-black rounded-xl text-center">
          Belum membeli tiket?. Tenang, kamu masih bisa menikmati keseruannya
          dengan membeli tiket on the spot di Prof. Soedarto pada tanggal 22
          Desember 2023.
        </p>
        {/* <Image
          src="/I-GATE 2023 2.0.png"
          alt="ticket"
          width={800}
          height={800}
          className="shadow-white"
        /> */}
      </div>
      <div className="p-4">
        <p className="text-4xl text-white font-extrabold mb-4">
          More About <br></br>I-GATE
        </p>
        <Link href="/more" className="bg-white rounded text-black p-2">
          CLICK.me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
