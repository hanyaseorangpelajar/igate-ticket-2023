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
        {/* <Image
          src="/I-GATE 2023 2.0.png"
          alt="ticket"
          width={800}
          height={800}
          className="shadow-white"
        /> */}
        <h1 className="p-4 m-5 bg-white text-black rounded-xl text-transform: uppercase font-bold text-center">
          Get ready for an epic night because tonight is THE night! 🎉 It's time
          to let loose, have fun, and create some unforgettable memories. The
          party is calling, and we've got a date with a night to remember! Dress
          to impress, put on your dancing shoes, and bring your A-game because
          we're about to turn this night into something legendary. Whether it's
          the beats that make us move, the laughter that fills the air, or the
          stories we'll share, let's savor every moment. Tonight is all about
          joy, laughter, and good vibes. So, let's leave all worries at the door
          and immerse ourselves in the celebration. It's not just any night –
          it's the night we've been waiting for! See you on the dance floor,
          ready to make tonight absolutely amazing! Cheers to the night,
          <span className="p-1 bg-black text-white rounded">dfrst</span>
        </h1>
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
