"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ChapterContextProps = {
  activeChapter: number;
  setActiveChapter: (chapterId: number) => void;
};

const ChapterContext = createContext<ChapterContextProps | undefined>(
  undefined
);

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [activeChapter, setActiveChapter] = useState<number>(1);

  return (
    <ChapterContext.Provider value={{ activeChapter, setActiveChapter }}>
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
