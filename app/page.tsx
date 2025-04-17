import Image from "next/image";
import PFAgora from "next/font/local";
const PFAgoraMedium = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Medium.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.webp')] bg-no-repeat bg-cover opacity-90">
      <div className="mt-130 ml-70 flex flex-col items-center">
        <h1
          className={`antialiased text-crna text-(--crna)  text-(--crna) text-6xl `}
        >
          Срби у покрету
        </h1>
        <h2
          className={`${PFAgoraMedium.className} antialiased text-crna text-(--crna) ml-16 text-(--crna) text-5xl mt-8 mr-10
          tracking-wide text-(--imscrvena)`}
        >
          Serbs on the move 
        </h2>
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
