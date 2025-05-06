import React from "react";
import HomeButton from "./HomeButton";
import ToggleLangaugeButton from "./ToggleLanguageButton";

export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute top-460 right-0  pr-13 z-30 flex flex-row gap-4 ">
      {children}
    </div>
  );
}
