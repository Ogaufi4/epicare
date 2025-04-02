import { motion } from "framer-motion";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Learn from "@/components/learn";
import Medical from "@/components/medicalVirtual";
import Team from "@/components/team";
import AdherenceTools from "@/components/adherenceTools";

import React from "react";

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
      </section>
      <section id="medical">
        <Medical />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="support">
        <Footer />
      </section>
    </div>
  );
}
