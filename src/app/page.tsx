import { motion } from "framer-motion";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Learn from "@/components/learn";
import Medical from "@/components/medicalVirtual";
import Team from "@/components/team";
import AdherenceTools from "@/components/adherenceTools";
import MedicationGallery from "@/components/MedicationGallery";
import ReadModeButton from "@/components/ReadModeButton";

import React from "react";
import AdherenceChart from "@/components/AdherenceChart";
import ReferenceMaterial from "@/components/referenceMaterial";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="learn">
        <Learn />
      </section>
      <section id="tools">
        <AdherenceTools />
        <MedicationGallery />
      </section>
      <section id="medical">
        <AdherenceChart />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
      
      <section id="team">
        <Team />
      </section>
      <section id="refernce">
        <ReferenceMaterial />
      </section>
      <ReadModeButton />
    </div>
  );
}
