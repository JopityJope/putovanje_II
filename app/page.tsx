import LanguagePicker from "@/app/components/LanguagePicker";
import ToggleLangaugeButton from "./components/ToggleLanguageButton";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ChaptersPage from "./components/ChaptersPage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextLang,
  CarouselPrevious,
  CarouselPreviousHome,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <Carousel
        className="h-full w-full bg-background"
        opts={{
          align: "start",
          loop: true,
          /*   dragFree: false,
          watchDrag: false, */
        }}
      >
        <CarouselContent className="h-full w-full">
          <CarouselItem className="h-full w-full">
            <HomePage />
            <LanguagePicker>
              <CarouselNextLang />
            </LanguagePicker>
          </CarouselItem>
          <CarouselItem className="h-full w-full">
            <div className="relative">
              <ChaptersPage />
              <Footer>
                <CarouselPreviousHome />
                <ToggleLangaugeButton />
              </Footer>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
}

/* 
<main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.png')] bg-no-repeat bg-cover opacity-90">
<div className="absolute top-0 left-0 w-full h-screen z-10">
  <Image
    src="/images/line/main-01.png"
    alt="Overlay photo"
    fill
    priority
    className="object-cover"
  />
  <Image
    src="/images/background/bg-1-09.png"
    alt="Overlay photo"
    fill
    priority
    className="object-cover opacity-18"
  />
</div>
<div className="mt-130 mr-30 flex flex-col items-end">
  <h1 className={`text-(--crna) text-7xl mr-4`}>Срби у покрету</h1>
  <h2
    className={`ml-16 text-(--crna) text-[55px] mt-4
    tracking-wide text-(--imscrvena)`}
  >
    Serbs on the move 
  </h2>
</div>

<LanguagePicker />
</main> */
