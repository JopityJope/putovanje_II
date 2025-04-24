import React from "react";
import HomeButton from "./HomeButton";
import ToggleLangaugeButton from "./ToggleLanguageButton";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 pb-10 pr-10 z-20 flex flex-row gap-4">
      <HomeButton />
      <ToggleLangaugeButton />
    </div>
  );
}
