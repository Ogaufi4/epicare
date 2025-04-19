import Hero from "@/components/hero";
import Learn from "@/components/learn";
import AdherenceTools from "@/components/adherenceTools";
import MedicationGallery from "@/components/MedicationGallery";
import AdherenceChart from "@/components/AdherenceChart";
import Faqs from "@/components/faqs";
import Team from "@/components/team";
import ReferenceMaterial from "@/components/referenceMaterial";
import ReadModeButton from "@/components/ReadModeButton";
import SectionReadButton from "@/components/SectionReadButton";

import React from "react";

export default function Home() {
  return (
    <div>
      <section id="home" className="relative">
        <Hero />
        <div className="absolute top-4 left-4 z-50">
          <SectionReadButton pageKey="hero" />
        </div>
      </section>
      <section id="learn" className="relative">
        <Learn />
        <div className="absolute top-4 left-4 z-50">
          <SectionReadButton pageKey="learn" />
        </div>
      </section>
      <section id="tools" className="relative">
        <AdherenceTools />
        <MedicationGallery />
        <div className="absolute top-4 left-4 z-50">
          <SectionReadButton pageKey="adherenceTools" />
        </div>
      </section>
      <section id="medical" className="relative">
        <AdherenceChart />
        <div className="absolute top-4 left-4 z-50">
          <SectionReadButton pageKey="adherenceChart" />
        </div>
      </section>
      <section id="faqs" className="relative">
        <Faqs />
        <div className="absolute top-4 left-4 z-50">
          <SectionReadButton pageKey="faqs" />
        </div>
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="refernce" className="relative">
        <ReferenceMaterial />
      </section>
      {/* <ReadModeButton /> */}
    </div>
  );
}
