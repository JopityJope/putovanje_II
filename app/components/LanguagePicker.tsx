import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

interface LanguagePickerProps {
  children: ReactNode;
  showLanguages: boolean;
  setShowLanguages: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LanguagePicker({
  children,
  showLanguages,
  setShowLanguages,
}: LanguagePickerProps) {
  const [fadeState, setFadeState] = useState<
    "hidden" | "fading-in" | "visible" | "fading-out"
  >("hidden");

  const [isMounted, setIsMounted] = useState(false);
  const toggleLanguages = () => {
    if (showLanguages) {
      setFadeState("fading-out");
      setTimeout(() => {
        setShowLanguages(false);
      }, 300);
    } else {
      setShowLanguages(true);
      setTimeout(() => {
        setFadeState("fading-in");
      }, 10);
    }
  };

  useEffect(() => {
    if (showLanguages) {
      setFadeState("fading-in");
    } else {
      setFadeState("fading-out");
    }
  }, [showLanguages]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative ml-201 mt-226 z-20">
      <Image
        src="/images/icons/compass.png"
        alt="Background Image"
        height={55}
        width={55}
        className="needle cursor-pointer"
        onClick={toggleLanguages}
      />

      {fadeState !== "hidden" && (
        <div
          className={`absolute top-full left-0 transition-opacity duration-200 ease-in-out
            ${
              fadeState === "fading-in" || fadeState === "visible"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
