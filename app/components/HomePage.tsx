import Image from "next/image";

function HomePage() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-[url('/images/background/bg-1.webp')] bg-no-repeat bg-cover">
        <Image
          src="/images/line/main-01.webp"
          alt=""
          fill
          priority
          className="object-cover z-20"
        />
        <Image
          src="/images/background/main-01.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-18"
        />
      </div>
      <div className="relative mt-130 mr-30 flex flex-col items-end z-50 opacity-90">
        <h1 className={`text-(--crna) text-7xl mr-4 select-none `}>
          Срби у покрету
        </h1>
        <h2
          className={`ml-16 text-(--crna) text-[55px] mt-4
tracking-wide text-(--imscrvena) select-none`}
        >
          Serbs on the move 
        </h2>
      </div>
    </>
  );
}

export default HomePage;
