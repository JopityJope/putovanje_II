"use client";
import Image from "next/image";
import Link from "next/link";
import { chapters } from "../data/chapters";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../components/Footer";
import { toRoman } from "../utils/toRoman";
import HomeButton from "./HomeButton";
import ToggleLangaugeButton from "./ToggleLanguageButton";

export default function ChaptersPage() {
  const { language } = useLanguage();

  const chapterData = [
    {
      paper: "paper-1",
      width: 280,
      position: "top-165 left-26",
      maxw: "135px",
    },
    {
      paper: "paper-1",
      width: 300,
      position: "top-111 left-80",
      maxw: "120px",
    },
    {
      paper: "paper-4",
      width: 340,
      position: "top-210 left-60",
      maxw: "190px",
    },
    {
      paper: "paper-1",
      width: 280,
      position: "top-330 left-30",
      maxw: "160px",
    },
    {
      paper: "paper-4",
      width: 360,
      position: "top-320 left-155",
      maxw: "190px",
    },
    {
      paper: "paper-1",
      width: 250,
      position: "top-155 left-200",
      maxw: "100px",
    },
  ];

  return (
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
      <div className="z-20">
        <ul className="relative w-full">
          {chapterData.map(({ paper, width, position, maxw }, index) => (
            <li
              key={index}
              className={`absolute ${position} flex flex-col items-center`}
            >
              <Link href={`/chapter-${index + 1}`} className="cursor-pointer">
                <span className="w-10 h-10 flex items-center justify-center rounded-full pt-1 bg-[var(--crna)] text-[var(--papir)] text-xl font-bold">
                  {toRoman(index + 1)}
                </span>
              </Link>

              <Link
                href={`/chapter-${index + 1}`}
                className="relative flex flex-col items-center"
              >
                <Image
                  src={`/images/paper/${paper}.png`}
                  alt={`Chapter ${index + 1}`}
                  height={68.35}
                  width={width}
                  className="rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center text-lg text-center">
                  <p
                    className="!text-[var(--crna)] z-30 opacity-100 text-center break-words"
                    style={{ maxWidth: maxw }}
                  >
                    {chapters[index][language]}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /* <main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.png')] bg-no-repeat bg-cover opacity-90"></main>
   */
}
