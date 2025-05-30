"use client";
import LanguagePicker from "@/app/components/LanguagePicker";
import ToggleLangaugeButton from "./components/ToggleLanguageButton";
import Footer from "./components/Footer";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "./components/PageTransition";

import ChaptersPage from "./components/ChaptersPage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextLang,
  CarouselPreviousHome,
  CarouselInnerAnimation,
} from "@/components/ui/carousel";

export default function Home() {
  const [showLanguages, setShowLanguages] = useState(false);
  return (
    <PageTransition transitionKey="home">
      <main className="h-screen w-screen overflow-hidden">
        <Carousel
          className="h-full w-full "
          opts={{
            align: "center",
            watchDrag: false,
          }}
        >
          <CarouselContent className="h-full w-full ">
            <CarouselItem className="h-full w-full relative" index={0}>
              <div className="absolute w-full h-screen">
                <Image
                  src="/images/line/main-01.png"
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
              <CarouselInnerAnimation index={0}>
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
              </CarouselInnerAnimation>
              <LanguagePicker
                showLanguages={showLanguages}
                setShowLanguages={setShowLanguages}
              >
                <CarouselNextLang setShowLanguages={setShowLanguages} />
              </LanguagePicker>
            </CarouselItem>
            <CarouselItem className="h-full w-full" index={1}>
              <div className="relative min-h-screen">
                <div className="">
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
                  <ChaptersPage />
                </CarouselInnerAnimation>
                <Footer>
                  <CarouselPreviousHome />
                  <ToggleLangaugeButton />
                </Footer>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </main>
    </PageTransition>
  );
}
