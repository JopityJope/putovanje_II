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

  const [isMounted, setIsMounted] = useState(false); // To track client-side mount

  // Toggle the language visibility
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

  // Effect to change fade state when `showLanguages` changes
  useEffect(() => {
    if (showLanguages) {
      setFadeState("fading-in");
    } else {
      setFadeState("fading-out");
    }
  }, [showLanguages]);

  // Ensuring the component renders only on the client side
  useEffect(() => {
    setIsMounted(true); // Set mounted flag after the first render
  }, []);

  // If not mounted, return null to prevent SSR mismatch
  if (!isMounted) return null;

  return (
    <div className="relative ml-201 mt-53 z-20">
      <Image
        src="/images/icons/compass.png"
        alt="Background Image"
        height={55}
        width={55}
        objectFit="cover"
        className="needle cursor-pointer"
        onClick={toggleLanguages}
      />
      {/* Conditionally render children with animation */}
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
