import React from "react";
import { chapters } from "../data/chapters";
import { toRoman } from "../utils/toRoman";

function ChapterTabs() {
  return (
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
  );
}

export default ChapterTabs;
