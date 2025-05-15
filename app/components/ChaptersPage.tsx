"use client";
import Image from "next/image";
import Link from "next/link";
import { chapters } from "../data/chapters";
import { useLanguage } from "../context/LanguageContext";
import { useChapter } from "../context/ChapterContext";
import { toRoman } from "../utils/toRoman";
import { useRouter } from "next/navigation";

export default function ChaptersPage() {
  const { language } = useLanguage();
  const { setActiveChapter } = useChapter();
  const router = useRouter();

  const chapterData = [
    {
      paper: "paper-1",
      width: 280,
      position: "top-165 left-26",
      maxw: "150px",
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

  const handleChapterClick = (index: number) => {
    setActiveChapter(index + 1);
    router.push("/chapter");
  };

  return (
    <div className="relative min-h-screen">
      <div className="z-20">
        <ul className="relative w-full">
          {chapterData.map(({ paper, width, position, maxw }, index) => (
            <li
              key={index}
              className={`absolute ${position} flex flex-col items-center cursor-pointer`}
              onClick={() => handleChapterClick(index)}
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full pt-1 bg-[var(--crna)] text-[var(--papir)] text-xl font-bold">
                {toRoman(index + 1)}
              </span>

              <div className="relative flex flex-col items-center">
                <Image
                  src={`/images/paper/${paper}.png`}
                  alt={`Chapter ${index + 1}`}
                  height={68.35}
                  width={width}
                  className="rounded "
                />
                <div className="absolute inset-0 flex items-center justify-center text-lg text-center">
                  <p
                    className="!text-[var(--crna)] z-30 opacity-100 text-center break-words"
                    style={{ maxWidth: maxw }}
                  >
                    {chapters[index][language]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
