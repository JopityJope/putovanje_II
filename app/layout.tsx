import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import PFAgora from "next/font/local";
import "./globals.css";

const PFAgoraRegular = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Regular.ttf",
});

const PFAgoraBold = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Bold.ttf",
  display: "swap",
});

const PFAgoraBlackItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-BlackItalic.ttf",
  display: "swap",
});

const PFAgoraExtraThin = PFAgora({
  src: "/fonts/PFAgoraSlabPro-ExtraThin.ttf",
  display: "swap",
});

const PFAgoraExtraThinItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-ExtraThinItalic.ttf",
  display: "swap",
});

const PFAgoraItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Italic.ttf",
  display: "swap",
});

const PFAgoraLight = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Light.ttf",
  display: "swap",
});

const PFAgoraLightItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-LightItalic.ttf",
});

const PFAgoraMedium = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Medium.ttf",
  display: "swap",
});

const PFAgoraMediumItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-MediumItalic.ttf",
  display: "swap",
});

const PFAgoraThin = PFAgora({
  src: "/fonts/PFAgoraSlabPro-Thin.ttf",
  display: "swap",
});

const PFAgoraThinItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-ThinIt.ttf",
  display: "swap",
});

const PFAgoraUltraBlack = PFAgora({
  src: "/fonts/PFAgoraSlabPro-UltraBlack.ttf",
  display: "swap",
});

const PFAgoraUltraBlackItalic = PFAgora({
  src: "/fonts/PFAgoraSlabPro-UltraBlackItalic.ttf",
  display: "swap",
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
        className={`${PFAgoraRegular.className} antialiased text-[#50d71e]`}
      >
        {children}
      </body>
    </html>
  );
}
