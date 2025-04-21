import LanguagePicker from "@/components/LanguagePicker";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.webp')] bg-no-repeat bg-cover opacity-90">
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        <Image
          src="/images/line/main.png"
          alt="Overlay photo"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="mt-140 mr-60 flex flex-col items-end">
        <h1 className={`text-(--crna) text-6xl mr-4`}>Срби у покрету</h1>
        <h2
          className={`ml-16 text-(--crna) text-5xl mt-6
          tracking-wide text-(--imscrvena)`}
        >
          Serbs on the move 
        </h2>
      </div>

      <LanguagePicker />
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
