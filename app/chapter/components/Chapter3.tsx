import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  TextAnimation,
  ButtonAnimation,
  ChapterAnimation,
} from "@/components/ui/carousel";
import { chapters } from "@/app/data/chapters";

import { chapter3sr } from "@/app/data/sr/chapter-3";
import { chapter3en } from "@/app/data/en/chapter-3";
import { toRoman } from "@/app/utils/toRoman";
import FooterChapters from "@/app/components/FooterChapters";
import { useLanguage } from "@/app/context/LanguageContext";

function page() {
  const { language } = useLanguage();
  const chapter = language === "sr" ? chapter3sr : chapter3en;

  return (
    <main className="h-screen w-screen overflow-hidden">
      <Carousel
        className="h-full w-full relative"
        opts={{ align: "center", watchDrag: true, duration: 45 }}
      >
        <CarouselContent className="h-full w-full">
          {chapter.pages.map((page, index) => (
            <CarouselItem
              className="h-full w-full relative"
              key={index}
              index={index}
            >
              <div className="absolute w-full h-screen bg-no-repeat bg-cover">
                {/* <Image
                  src={`/images/line/ch1_${index + 1}.png`}
                  alt=""
                  fill
                  priority
                  className="object-cover z-20"
                /> */}
              </div>

              <div className="z-30 text-[--crna]">
                {index === 0 && (
                  <ChapterAnimation index={index}>
                    <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--imscrvena) text-(--papir) text-xl font-bold mt-100 ml-18 z-30">
                      {toRoman(2)}
                    </span>

                    <h1 className="absolute flex flex-col text-(--imscrvena) text-5xl mt-85 ml-20">
                      {language === "sr" ? (
                        <>
                          <span className="ml-10">У потрази за</span>
                          <span className="ml-18 mt-2">дукатом више</span>
                        </>
                      ) : (
                        <>
                          <span className="ml-10">In search for</span>
                          <span className="ml-18 mt-2">an extra coin</span>
                        </>
                      )}
                    </h1>
                  </ChapterAnimation>
                )}
                <div
                  className={`relative flex flex-col items-center text-lg text-justify ${page.paragraphPosition}`}
                >
                  <TextAnimation index={index}>
                    <p
                      className={` items-center text-lg text-justify `}
                      dangerouslySetInnerHTML={{ __html: page.text }}
                    ></p>
                  </TextAnimation>
                  <ButtonAnimation index={index}>
                    <p className="mt-12 text-2xl">
                      - {index + 1}/{chapter.pages.length} -
                    </p>
                  </ButtonAnimation>
                </div>
              </div>

              {/*  <div className="flex items-center justify-center absolute mt-290">
                  <Image
                     src={`/images/chapter-1/19/${index + 1}.png`} 
                    src={`/images/chapter-1/20.webp`} 
                    src={`/images/chapter-1/20.webp`}
                    alt=""
                    height={30}
                    width={1080}
                    priority
                    className=" opacity-30"
                  />
                </div> */}

              <ButtonAnimation index={index}>
                <CarouselNext />
                <CarouselPrevious />
              </ButtonAnimation>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <FooterChapters />
    </main>
  );
}

export default page;

/* <div className="flex gap-20 mt-310 ml-25 items-center justify-center absolute">
                    <Image
                      src="/images/chapter-1/04.webp"
                      alt=""
                      height={330}
                      width={330}
                      priority
                      className="object-cover p-10 bg-white"
                    />
                    <Image
                      src="/images/chapter-1/01.webp"
                      alt=""
                      width={450}
                      height={330}
                      priority
                      className="object-cover p-10 bg-white"
                    />
                  </div> */

/*   <CarouselItem className="h-full w-full relative" index={0}>
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

                <h1 className="absolute flex flex-col text-(--imscrvena) text-5xl mt-85 ml-20">
                  {language === "sr" ? (
                    <>
                      <span className="ml-10">Народ збега</span>
                      <span className="ml-18">и сеоба</span>
                    </>
                  ) : (
                    <>
                      <span className="ml-10">The people of </span>
                      <span className="ml-18"> flight and refuge</span>
                    </>
                  )}
                </h1>
                <p className="absolute mt-175 ml-115 max-w-107 text- text-center text-lg">
                  {chapter.pages[0].text}
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
          </CarouselItem> */
