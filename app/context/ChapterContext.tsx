"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ChapterContextProps = {
  activeChapter: number;
  reloadKey: number;
  setActiveChapter: (chapterId: number) => void;
};

const ChapterContext = createContext<ChapterContextProps | undefined>(
  undefined
);

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [activeChapter, setActiveChapterState] = useState<number>(1);
  const [reloadKey, setReloadKey] = useState<number>(0);

  const setActiveChapter = (chapterId: number) => {
    if (chapterId === activeChapter) {
      setReloadKey((prev) => prev + 1);
    } else {
      setActiveChapterState(chapterId);
      setReloadKey((prev) => prev + 1);
    }
  };

  return (
    <ChapterContext.Provider
      value={{ activeChapter, reloadKey, setActiveChapter }}
    >
      {children}
    </ChapterContext.Provider>
  );
}

export function useChapter() {
  const context = useContext(ChapterContext);
  if (!context) {
    throw new Error("useChapter must be used within a ChapterProvider");
  }
  return context;
}
