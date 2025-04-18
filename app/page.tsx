"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showLanguages, setShowLanguages] = useState(false);
  return (
    <main className="flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.webp')] bg-no-repeat bg-cover opacity-90">
      <div className="mt-140 mr-60 flex flex-col items-end">
        <h1 className={`text-(--crna) text-6xl mr-4`}>Срби у покрету</h1>
        <h2
          className={`ml-16 text-(--crna) text-5xl mt-8
          tracking-wide text-(--imscrvena)`}
        >
          Serbs on the move 
        </h2>
      </div>
      <div className="ml-210 mt-50">
        <Image
          src="/images/icons/compass.png"
          alt="Background Image"
          height={60}
          width={60}
          objectFit="cover"
          className="needle cursor-pointer"
          onClick={() => setShowLanguages(!showLanguages)}
        ></Image>

        {showLanguages && (
          <div className="flex flex-col gap-4 mt-15 ml-[-60px] items-start">
            <button
              className="relative cursor-pointer group"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <Image
                src="/images/paper/paper-1.png"
                alt="српски"
                height={200}
                width={200}
                className="rounded"
              />
              <span className="absolute inset-0 flex items-center justify-center text-black text-xl">
                српски
              </span>
            </button>
            <button
              className="relative cursor-pointer group"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <Image
                src="/images/paper/paper-1.png"
                alt="english"
                height={200}
                width={202}
                className="rounded"
              />
              <span className="absolute inset-0 flex items-center justify-center text-black text-xl">
                English
              </span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
{
  /* ${PFAgoraMedium.className}  */
  /* <svg>
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.65"></feTurbulence>
        </filter>
      </svg> */
  /*  <div className="flex h-screen bg-background bg-[url('/images/background/bg-5.webp')] bg-cover bg-center">


       <Image
          src="/images/background/bg-2.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-1 opacity-75"
        /> 
      <h1></h1>
    </div> */
}
