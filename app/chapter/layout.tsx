import { ReactNode } from "react";
import FooterChapters from "../components/FooterChapters";

export default function ChapterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <FooterChapters />
    </div>
  );
}
