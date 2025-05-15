import React from "react";
import HomeButton from "./HomeButton";
import ToggleLangaugeButton from "./ToggleLanguageButton";
import Image from "next/image";
import ChapterTabs from "./ChapterTabs";
export default function FooterChapters() {
  return (
    <div className="fixed w-screen top-460 left-0 pb-5 pr-13 z-30 flex flex-row gap-4 flex">
      <Image
        src="/images/paper/paper-9.webp"
        alt=""
        width={1080}
        height={328.9}
        priority
        className="scale-y-130 absolute bottom-[-6.5rem] z-10"
      />
      <div className="absolute w-screen flex z-30 justify-between  items-start   ">
        <ChapterTabs />
        <div className="z-30 flex gap-4 pb-5 pr-13">
          <HomeButton />
          <ToggleLangaugeButton />
        </div>
      </div>
    </div>
  );
}
