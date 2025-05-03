"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

function LanguagePicker({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setLanguage } = useLanguage();

  const [showLanguages, setShowLanguages] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSelect = (lang: "sr" | "en") => {
    setLanguage(lang);
  };

  return (
    <div className="relative ml-201 mt-53 z-20">
      <Image
        src="/images/icons/compass.png"
        alt="Background Image"
        height={55}
        width={55}
        objectFit="cover"
        className="needle cursor-pointer"
        onClick={() => setShowLanguages(!showLanguages)}
      />
      {showLanguages && children}
    </div>
  );
}

export default LanguagePicker;

/* (
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
      ) */
