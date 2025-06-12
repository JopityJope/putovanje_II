import React from "react";
import LanguagePicker from "@/app/components/LanguagePicker";
import ToggleLangaugeButton from "../components/ToggleLanguageButton";
import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function page() {
  return (
    <PageTransition transitionKey="credits">
      <p className="mt-150 ml-60">Credits.........</p>
      <Footer>
        <HomeButton />
      </Footer>
    </PageTransition>
  );
}
