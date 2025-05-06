import React from "react";
import HomeButton from "./HomeButton";
import ToggleLangaugeButton from "./ToggleLanguageButton";
import Image from "next/image";

export default function FooterChapters() {
  return (
    <div className="fixed w-screen top-460 left-0 pb-5 pr-13 z-30 flex flex-row gap-4 flex">
      <Image
        src="/images/paper/paper-9.webp"
        alt=""
        width={1080}
        height={400}
        priority
        className="scale-y-130 absolute bottom-[-6.5rem] z-10"
      />
      <div className="absolute w-screen flex z-30 justify-between  items-start   ">
        <div className="flex gap-19 pl-20 -translate-y-4.5">
          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--imscrvena) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold">
              I
            </button>
            <p className="absolute text-(--imscrvena) top-[38] max-w-25 text-center text-xs leading-3.7">
              У потрази за дукатом више
            </p>
          </div>
          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold">
              II
            </button>
            <p className="absolute text-(--crna) top-[38] max-w-25 text-center text-xs leading-3.7">
              У потрази за дукатом више
            </p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold">
              III
            </button>
            <p className="absolute text-(--crna) top-[38] max-w-25 text-center text-xs leading-3.7">
              На изворима вере и родољубља
            </p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold leading-3.7">
              IV
            </button>
            <p className="absolute text-(--crna) top-[38] max-w-25 text-center text-xs leading-3.7">
              У служби отачаства
            </p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold">
              V
            </button>
            <p className="absolute text-(--crna) top-[38] max-w-30 text-center text-xs leading-3.7">
              Из разоноде или на трагу авантуре
            </p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <button className="w-8 h-8  bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center text-(--papirbg)  font-bold">
              V
            </button>
            <p className="absolute text-(--crna) top-[38] max-w-50 text-center text-xs leading-3.7">
              Жена и путовање
            </p>
          </div>
        </div>
        <div className="z-30 flex gap-4 pb-5 pr-13">
          <HomeButton />
          <ToggleLangaugeButton />
        </div>
      </div>
    </div>
  );
}
