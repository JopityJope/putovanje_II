import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselInnerAnimation,
} from "@/components/ui/carousel";

import { chapter1 } from "@/app/data/sr/chapter-1";
import { toRoman } from "@/app/utils/toRoman";
import FooterChapters from "../components/FooterChapters";
import { div } from "framer-motion/client";
import PageTransition from "../components/PageTransition";

function page() {
  return (
    <PageTransition>
      <main className="h-screen w-screen overflow-hidden">
        <Carousel
          className="h-full w-full"
          opts={{
            align: "center",
            watchDrag: false,
          }}
        >
          <CarouselContent className="h-full w-full ">
            <CarouselItem className="h-full w-full relative" index={0}>
              <div className="absolute w-full h-screen  bg-no-repeat bg-cover">
                <Image
                  src="/images/line/ch1_1.png"
                  alt=""
                  fill
                  priority
                  className="object-cover z-20"
                />
              </div>
              <CarouselInnerAnimation index={0}>
                <div className="z-30 text-(--crna)">
                  <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--imscrvena) text-(--papir) text-xl font-bold mt-100 ml-18 z-30">
                    {toRoman(1)}
                  </span>

                  <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--crna) text-(--papir) text-xl font-bold mt-253 ml-240 z-30">
                    &#10095;
                  </span>
                  <h1 className="absolute flex flex-col text-(--imscrvena) text-6xl mt-85 ml-20">
                    <span className="ml-10">Народ збега</span>
                    <span className="ml-23">и сеоба</span>
                  </h1>
                  <p className="absolute mt-175 ml-115 max-w-107 text- text-center text-lg">
                    {chapter1.pages[0].text}
                  </p>
                  <div className="flex gap-20 mt-310 ml-25 items-center justify-center absolute">
                    <Image
                      src="/images/chapter-1/04.webp"
                      alt=""
                      height={330}
                      width={330}
                      priority
                      className="object-cover p-10 bg-[white]"
                    />
                    <Image
                      src="/images/chapter-1/01.webp"
                      alt=""
                      width={450}
                      height={330}
                      priority
                      className="object-cover p-10 bg-[white]"
                    />
                  </div>
                </div>
              </CarouselInnerAnimation>
            </CarouselItem>
            <CarouselItem className="h-full w-full" index={1}>
              <div className="relative min-h-screen">
                <div className="absolute top-0 left-0 w-full h-screen bg-[url('/images/background/bg-1.webp')] bg-no-repeat bg-cover">
                  <Image
                    src="/images/line/main-02.png"
                    alt="Overlay photo"
                    fill
                    priority
                    className="object-cover"
                  />
                  <Image
                    src="/images/background/main-02.webp"
                    alt="Overlay photo"
                    fill
                    priority
                    className="object-cover opacity-18"
                  />
                </div>
                <CarouselInnerAnimation index={1}>
                  <div></div>
                </CarouselInnerAnimation>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <FooterChapters />
      </main>
    </PageTransition>
  );
}

export default page;

/*   <main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.png')] bg-no-repeat bg-cover opacity-90">
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        <Image
          src="/images/line/page-1.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <Image
          src="/images/b.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="z-30 text-(--crna) ">
        <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--imscrvena) text-(--papir) text-xl font-bold mt-105 ml-18 z-30">
          {toRoman(1)}
        </span>

        <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--crna) text-(--papir) text-xl font-bold mt-253 ml-240 z-30">
          &#10095;
        </span>
        <h1 className="absolute flex flex-col text-(--imscrvena) text-6xl mt-85 ml-20">
          <span className="ml-10">Народ збега</span>
          <span className="ml-23">и сеоба</span>
        </h1>
        <p className="absolute mt-175 ml-115 max-w-107 text- text-center text-lg">
          {chapter1.pages[0].text}
        </p>
        <div className="flex gap-20 mt-310 items-center justify-center">
          <Image
            src="/images/chapter-1/04.webp"
            alt=""
            height={330}
            width={330}
            priority
            className="object-cover p-10 bg-[white]"
          />
          <Image
            src="/images/chapter-1/01.webp"
            alt=""
            width={450}
            height={330}
            priority
            className="object-cover p-10 bg-[white]"
          />
        </div>
        <Image
          src="/images/paper/paper-9.webp"
          alt=""
          width={1080}
          height={400}
          priority
          className="scale-y-130 absolute bottom-[-4rem] z-10"
        />
      </div>
      <Footer />
    </main>
   */
