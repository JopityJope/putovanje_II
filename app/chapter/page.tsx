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
  const { activeChapter, reloadKey } = useChapter();

  const renderChapter = () => {
    switch (activeChapter) {
      case 1:
        return <Chapter1 key={reloadKey} />;
      case 2:
        return <Chapter2 key={reloadKey} />;
      case 3:
        return <Chapter3 key={reloadKey} />;
      case 4:
        return <Chapter4 key={reloadKey} />;
      case 5:
        return <Chapter5 key={reloadKey} />;
      case 6:
        return <Chapter6 key={reloadKey} />;
    }
  };

  return (
    <PageTransitionChapters transitionKey={reloadKey}>
      <main className="min-h-screen w-screen overflow-hidden">
        {renderChapter()}
      </main>
    </PageTransitionChapters>
  );
}

export default page;
