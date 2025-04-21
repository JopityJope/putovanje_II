"use client";
import Image from "next/image";
import { chapters } from "../data/chapters";
import { useLanguage } from "../context/LanguageContext";
import HomeButton from "@/components/HomeButton";
import ToggleLangaugeButton from "@/components/ToggleLanguageButton";
import { toRoman } from "../utils/toRoman";

export default function Chapters() {
  const { language } = useLanguage();

  const paperData = [
    { src: "/images/paper/paper-2.png", width: 450, top: 290, left: 5 },
    { src: "/images/paper/paper-2.png", width: 450, top: 350, left: 100 },
    { src: "/images/paper/paper-3.png", width: 570, top: 180, left: 120 },
    { src: "/images/paper/paper-2.png", width: 500, top: 100, left: 20 },
    { src: "/images/paper/paper-2.png", width: 530, top: -160, left: 60 },
    { src: "/images/paper/paper-1.png", width: 350, top: -110, left: 170 },
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.webp')] bg-no-repeat bg-cover opacity-90">
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        <Image
          src="/images/line/chapters.png"
          alt="Overlay photo"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="z-20">
        <ul>
          <li className="">
            <button className="relative cursor-pointer group top-290 left-5">
              <Image
                src="/images/paper/paper-2.png"
                alt="english"
                height={68.35}
                width={450}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl gap-2 text-center ">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                  {toRoman(1)}
                </span>
                <span>{chapters[0][language]}</span>
              </div>
            </button>
          </li>
          <li>
            <button className="relative cursor-pointer group top-350 left-100">
              <Image
                src="/images/paper/paper-2.png"
                alt="english"
                height={68.35}
                width={450}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl gap-2 text-center ">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                  {toRoman(2)}
                </span>
                <span>{chapters[1][language]}</span>
              </div>
            </button>
          </li>
          <li>
            <button className="relative cursor-pointer group top-180 left-120">
              <Image
                src="/images/paper/paper-3.png"
                alt="english"
                height={68.35}
                width={570}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl gap-2 text-center ">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                  {toRoman(3)}
                </span>
                <span>{chapters[2][language]}</span>
              </div>
            </button>
          </li>
          <li>
            <button className="relative cursor-pointer group top-100 left-20">
              <Image
                src="/images/paper/paper-2.png"
                alt="english"
                height={68.35}
                width={500}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl gap-2 text-center ">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                  {toRoman(4)}
                </span>
                <span>{chapters[3][language]}</span>
              </div>
            </button>
          </li>
          <li>
            <button className="relative cursor-pointer group top-[-160] left-60">
              <Image
                src="/images/paper/paper-2.png"
                alt="english"
                height={68.35}
                width={530}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl gap-2 text-center ">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                  {toRoman(5)}
                </span>
                <span>{chapters[4][language]}</span>
              </div>
            </button>
          </li>
          <li>
            <button className="relative cursor-pointer group top-[-70] left-170 flex flex-col items-center">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-(--crna) text-(--papir) text-2xl font-bold ">
                {toRoman(6)}
              </span>
              <Image
                src="/images/paper/paper-2.png"
                alt="english"
                height={68.35}
                width={350}
              />
              <div className="absolute inset-0 flex flex-wrap items-center justify-center text-(--crna) text-xl text-center ">
                <span className="mt-10">{chapters[5][language]}</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-0 right-0 pb-10 pr-10 z-20 flex flex-row gap-4">
        <HomeButton />
        <ToggleLangaugeButton />
      </div>
    </main>
  );
}
