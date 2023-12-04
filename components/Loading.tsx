import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white items-center text-center text-black rounded flex">
        <div>
          <Image
            src="/disc.png"
            alt="disc"
            width={25}
            height={25}
            className="animate-spin m-2"
          />
        </div>
        <h1 className="m-2">Sending data...</h1>
      </div>
    </div>
  );
}

export default Loading;
