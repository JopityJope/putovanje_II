"use client";
import { chapters } from "../data/chapters";
import { toRoman } from "../utils/toRoman";
import { useLanguage } from "../context/LanguageContext";
import { useChapter } from "../context/ChapterContext";

function ChapterTabs() {
  const { language } = useLanguage();
  const { activeChapter, setActiveChapter } = useChapter();
  return (
    <div className="flex gap-21 pl-20 -translate-y-6">
      {chapters.map((chapter) => {
        const isActive = chapter.id === activeChapter;

        return (
          <div key={chapter.id} className="flex flex-col items-center text-sm">
            <button
              onClick={() => setActiveChapter(chapter.id)}
              className={`w-8 h-8 ${
                isActive ? "bg-(--imscrvena)" : "bg-(--crna)"
              } rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg) font-bold transition-all duration-300 ease-in-out transform ${
                chapter.id === 4 ? "leading-3.7" : ""
              }`}
            >
              <span className="relative top-[1px]">{toRoman(chapter.id)}</span>
            </button>
            <p
              className={`absolute ${
                isActive ? "text-(--imscrvena)" : "text-(--crna)"
              } top-[38] ${
                chapter.maxWidth || "max-w-25"
              } text-center text-xs leading-3.7 transition-colors duration-300 ease-in-out`}
            >
              {chapter[language]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ChapterTabs;
