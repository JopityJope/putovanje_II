import type { Metadata } from "next";
import Header from "@/app/components/Header";
import PFAgora from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { ChapterProvider } from "./context/ChapterContext";

const PFAgoraRegular = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Putovanje",
  description: "II deo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PFAgoraRegular.className} antialiased text-[--crna] overflow-hidden w-full h-screen bg-[url('/images/background/bg-1.webp')] bg-no-repeat bg-cover`}
      >
        <LanguageProvider>
          <Header />

          <ChapterProvider> {children}</ChapterProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
