"use client";

import { toRoman } from "@/app/utils/toRoman";
import FooterChapters from "../components/FooterChapters";
import { div } from "framer-motion/client";
import PageTransitionChapters from "../components/PageTransitionChapters";
import { useChapter } from "@/app/context/ChapterContext";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter6 from "./components/Chapter6";

function page() {
  const { activeChapter } = useChapter();

  const renderChapter = () => {
    switch (activeChapter) {
      case 1:
        return <Chapter1 />;
      case 2:
        return <Chapter2 />;
      case 3:
        return <Chapter3 />;
      case 4:
        return <Chapter4 />;
      case 5:
        return <Chapter5 />;
      case 6:
        return <Chapter6 />;
    }
  };

  return (
    <PageTransitionChapters transitionKey={activeChapter}>
      <main className="min-h-screen w-screen overflow-hidden">
        {renderChapter()}
      </main>
    </PageTransitionChapters>
  );
}

export default page;
