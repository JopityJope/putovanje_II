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
  PhotoAnimation,
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
    <main
      className="relative h-screen w-screen overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/images/background/18.webp')]
  before:bg-cover before:bg-center
  before:opacity-15"
    >
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
              {/* Linija */}
              <div className="absolute w-full h-screen bg-no-repeat bg-cover">
                <Image
                  src={`/images/line/chapter1-0${index + 1}.png`}
                  alt=""
                  fill
                  priority
                  className="object-cover z-20"
                />
              </div>

              {/* Citati */}
              <PhotoAnimation index={index}>
                {page.quote && (
                  <div
                    className={`absolute w-full h-screen bg-no-repeat bg-cover ${page.quote.position}`}
                  >
                    <>
                      <div className="relative">
                        <Image
                          src={`/images/paper/paper-${page.quote.image}.webp`}
                          alt=""
                          className="rotate-5 opacity-70 "
                          width={`${page.quote.width}`}
                          height={130}
                        />

                        <div
                          className={`absolute inset-0 ml-28 flex flex-col justify-center`}
                          style={{ maxWidth: page.quote.maxw }}
                        >
                          <p className="italic text-sm text-[--crna] relative mt-2">
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
                              src={"/images/icons/feather.webp"}
                              width={30}
                              height={35.09}
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
                    </>
                  </div>
                )}
              </PhotoAnimation>
              {/* Naslov i tekst */}
              <div className="absolute z-30 text-[--crna] rotate">
                {index === 0 && (
                  <>
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
                          <span className="ml-10">On the sources of</span>
                          <span className="ml-18 mt-2">
                            faith and patriotism
                          </span>
                        </>
                      )}
                    </h1>
                  </>
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
                </div>
              </div>
              {/* Broj stranice */}

              <p className={`absolute text-2xl z-30 ${page.pageNumber}`}>
                - {index + 1}/{chapter.pages.length} -
              </p>

              {/* Slike */}
              <PhotoAnimation index={index}>
                {page.image && (
                  <div
                    className={`flex flex-col items-center justify-center absolute z-30 gap-4 ${page.image.position} box-border`}
                  >
                    <Image
                      src={`/images/chapter-1/0${page.image.name}.webp`}
                      alt=""
                      height={`${page.image.height}`}
                      width={`${page.image.width}`}
                      priority
                      className="bg-[white] p-8 pb-30 box-border shadow-lg"
                    />
                    <p
                      className="text-left text-base text-gray-600 -mt-28 px-9 "
                      style={{ maxWidth: `${page.image.width}px` }}
                    >
                      {page.image.description}
                    </p>
                  </div>
                )}
              </PhotoAnimation>

              <ButtonAnimation index={index}>
                <CarouselNext className={`${page.buttonNext}`}> </CarouselNext>
                <CarouselPrevious
                  className={`${page.buttonPrev}`}
                ></CarouselPrevious>
              </ButtonAnimation>

              {/* Iduće poglavlje */}
              {index === chapter.pages.length - 1 && (
                <>
                  <div
                    className={`absolute top-340 left-190 flex flex-col items-center cursor-pointer z-30`}
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <FooterChapters />
    </main>
  );
}

export default page;
