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
import { useChapter } from "@/app/context/ChapterContext";
import { chapter1sr } from "@/app/data/sr/chapter-1";
import { chapter1en } from "@/app/data/en/chapter-1";
import { toRoman } from "@/app/utils/toRoman";
import FooterChapters from "@/app/components/FooterChapters";
import { useLanguage } from "@/app/context/LanguageContext";

function page() {
  const { language } = useLanguage();
  const chapter = language === "sr" ? chapter1sr : chapter1en;
  const { setActiveChapter } = useChapter();

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
              <div className="absolute w-full h-screen bg-no-repeat bg-cover left-105 top-70">
                <ButtonAnimation index={index}>
                  {page.quote && (
                    <div>
                      <div className="relative">
                        <Image
                          src="/images/paper/paper-12.webp"
                          alt=""
                          className="rotate-7"
                          width={520}
                          height={130}
                        />

                        <div className="absolute inset-0 ml-28 flex flex-col justify-center max-w-80">
                          <p className="italic text-sm text-[--crna] relative mt-4">
                            <span className="text-sm align-top mr-1 leading-none">
                              ❝
                            </span>
                            <span
                              className=""
                              dangerouslySetInnerHTML={{
                                __html: page.quote.text,
                              }}
                            />
                            <span className="text-sm align-top ml-1 leading-none">
                              ❞
                            </span>
                          </p>
                          <div className="flex items-center pb-2 gap-2 mt-3">
                            <Image
                              alt=""
                              src={"/images/icons/feather.svg"}
                              width={30}
                              height={30}
                              className=""
                            ></Image>
                            <p
                              className="text-sm text-[--crna]"
                              dangerouslySetInnerHTML={{
                                __html: page.quote.author,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ButtonAnimation>
              </div>

              <div className="absolute z-30 text-[--crna] rotate">
                {index === 0 && (
                  <ChapterAnimation index={index}>
                    <span className="absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--imscrvena) text-(--papir) text-xl font-bold mt-100 ml-18 z-30">
                      {toRoman(1)}
                    </span>

                    <h1 className="absolute flex flex-col text-(--imscrvena) text-5xl mt-85 ml-20">
                      {language === "sr" ? (
                        <>
                          <span className="ml-10">Народ збега</span>
                          <span className="ml-18 mt-2">и сеоба</span>
                        </>
                      ) : (
                        <>
                          <span className="ml-10">The people of </span>
                          <span className="ml-18 mt-2"> flight and refuge</span>
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
                      className={`items-center text-lg text-justify `}
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
                {index === chapter.pages.length - 1 && (
                  <>
                    <div
                      className={`absolute top-165 left-190 flex flex-col items-center cursor-pointer`}
                      onClick={() => setActiveChapter(2)}
                    >
                      <span className="w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-[var(--crna)] text-[var(--papirbg)] text-xl font-bold">
                        {toRoman(2)}
                      </span>

                      <div className="relative flex flex-col items-center">
                        <Image
                          src={`/images/paper/paper-1.png`}
                          alt={`Chapter ${index + 1}`}
                          height={68.35}
                          width={300}
                          className="rounded"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-lg text-center">
                          <p
                            className="!text-[var(--crna)] z-30 opacity-100 text-center break-words"
                            style={{ maxWidth: 120 }}
                          >
                            {chapters[1][language]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
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

/* <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--crna) text-(--papir) text-xl font-bold mt-200 mr-10 z-30",
        orientation === "horizontal" ? "top-50 right-0 -translate-y-1/2" : "",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <span>&#10095;</span>
    </Button> */
