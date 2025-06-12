"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  prevIndex: number | null;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      duration: 45,
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const prevIndexRef = React.useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const previousIndex = prevIndexRef.current;

    setSelectedIndex(currentIndex);
    prevIndexRef.current = currentIndex;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    setPrevIndex(previousIndex);
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        prevIndex,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="h-screen" data-slot="carousel-content">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "" : " flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({
  className,
  index,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  );
}

const CarouselInnerAnimation = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { selectedIndex, prevIndex } = useCarousel();

  const isCurrent = selectedIndex === index;
  const isPrevious = prevIndex === index;
  const isFirstLoad = prevIndex === null && selectedIndex === 0;

  return (
    <>
      {isPrevious && (
        <motion.div
          key={`prev-${index}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full z-10"
        >
          {children}
        </motion.div>
      )}

      {isFirstLoad && isCurrent && (
        <motion.div
          key={`first-load-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-20"
        >
          {children}
        </motion.div>
      )}

      {!isFirstLoad && isCurrent && (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="absolute inset-0 w-full h-full z-20"
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

const ChapterAnimation = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { selectedIndex, prevIndex } = useCarousel();

  const isCurrent = selectedIndex === index;
  const isPrevious = prevIndex === index;
  const isFirstLoad = prevIndex === null && selectedIndex === 0;

  return (
    <>
      {isPrevious && (
        <motion.div
          key={`prev-${index}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full z-10"
        >
          {children}
        </motion.div>
      )}

      {isFirstLoad && isCurrent && (
        <motion.div
          key={`first-load-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-20"
        >
          {children}
        </motion.div>
      )}

      {!isFirstLoad && isCurrent && (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="absolute inset-0 w-full h-full z-20"
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

const TextAnimation = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { selectedIndex, prevIndex } = useCarousel();

  const isCurrent = selectedIndex === index;
  const isPrevious = prevIndex === index;
  const isFirstLoad = prevIndex === null && selectedIndex === 0;

  return (
    <>
      {isPrevious && (
        <motion.div
          key={`prev-${index}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          {children}
        </motion.div>
      )}

      {isFirstLoad && isCurrent && (
        <motion.div
          key={`first-load-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          {children}
        </motion.div>
      )}

      {!isFirstLoad && isCurrent && (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className=""
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

const PhotoAnimation = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { selectedIndex, prevIndex } = useCarousel();

  const isCurrent = selectedIndex === index;
  const isPrevious = prevIndex === index;
  const isFirstLoad = prevIndex === null && selectedIndex === 0;

  return (
    <>
      {isPrevious && (
        <motion.div
          key={`prev-${index}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          {children}
        </motion.div>
      )}

      {isFirstLoad && isCurrent && (
        <motion.div
          key={`first-load-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          {children}
        </motion.div>
      )}

      {!isFirstLoad && isCurrent && (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
          className=""
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

const ButtonAnimation = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { selectedIndex, prevIndex } = useCarousel();

  const isCurrent = selectedIndex === index;
  const isPrevious = prevIndex === index;
  const isFirstLoad = prevIndex === null && selectedIndex === 0;

  return (
    <>
      {isPrevious && (
        <motion.div
          key={`prev-${index}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          className=" "
        >
          {children}
        </motion.div>
      )}

      {isFirstLoad && isCurrent && (
        <motion.div
          key={`first-load-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0, ease: "easeOut" }}
          className=""
        >
          {children}
        </motion.div>
      )}

      {!isFirstLoad && isCurrent && (
        <motion.div
          key={`current-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.2 }}
          className=""
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  if (!canScrollPrev) return null;

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--crna) text-(--papir) text-xl font-bold mt-200 mr-248.5 z-30",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <span className="p-12 rounded-full">&#10094;</span>
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  if (!canScrollNext) return null;

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute w-12 h-12 flex items-center justify-center rounded-full pt-1 bg-(--crna) text-(--papir) text-xl font-bold mt-200 mr-10 z-30 ",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <span className="p-12 rounded-full">&#10095;</span>
    </Button>
  );
}

function CarouselNextLang({
  setShowLanguages,
}: {
  setShowLanguages: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLanguage } = useLanguage();
  const { scrollNext } = useCarousel();
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (lang: "sr" | "en") => {
    setLanguage(lang);
    scrollNext();
    setShowLanguages(false);
  };

  useEffect(() => {
    setShowLanguages(false);
  }, [currentPage, setShowLanguages]);

  return (
    <div className="flex flex-col gap-6 mt-14 ml-[-50px] items-start">
      <button
        className="relative cursor-pointer group"
        onClick={() => handleSelect("sr")}
      >
        <Image
          src="/images/paper/paper-1.png"
          alt="српски"
          height={68.35}
          width={200}
          className="rounded"
        />
        <span className="absolute inset-0 flex items-center justify-center text-black text-xl">
          српски
        </span>
      </button>
      <button
        className="relative cursor-pointer group"
        onClick={() => handleSelect("en")}
      >
        <Image
          src="/images/paper/paper-1.png"
          alt="english"
          height={68.35}
          width={202}
          className="rounded"
        />
        <span className="absolute inset-0 flex items-center justify-center text-black text-xl">
          English
        </span>
      </button>
    </div>
  );
}

function CarouselPreviousHome({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      className="w-14 h-14 bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center"
    >
      <Image src="/images/icons/home.png" alt="Home" width={25} height={25} />
    </button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselNextLang,
  CarouselPreviousHome,
  CarouselInnerAnimation,
  ButtonAnimation,
  ChapterAnimation,
  TextAnimation,
  PhotoAnimation,
};
