"use client";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ToggleLangaugeButton() {
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "sr" ? "en" : "sr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-14 h-14 pt-1 bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg) text-xl font-bold"
    >
      {language === "en" ? "СР" : "EN"}
    </button>
  );
}
