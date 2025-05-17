"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language } = useLanguage();
  const titleText =
    language === "sr"
      ? "ИСТОРИЈСКИ МУЗЕЈ СРБИЈЕ"
      : "HISTORICAL MUSEUM OF SERBIA";

  const subtitleText =
    language === "sr" ? "Путовање у XIX веку" : "Nineteenth-Century Travel";

  return (
    <header className="w-full pl-5 pr-10 py-5 flex items-center justify-between fixed top-0 z-50 opacity-90 w-screen select-none">
      <div className="flex items-center">
        <Image
          src="/images/logo/logo-1.png"
          alt="Logo"
          className=""
          width={65}
          height={65}
          priority={false}
        />
        <p className="text-(--imscrvena) text-small ml-1 pl-3 py-2 border-l-1 border-(--imscrvena)">
          {titleText}
        </p>
      </div>
      <p className="text-(--crna) text-xl">{subtitleText}</p>
    </header>
  );
}
