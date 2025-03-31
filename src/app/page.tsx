import { motion } from "framer-motion";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Learn from "@/components/learn";
import Medical from "@/components/medicalVirtual";
import Team from "@/components/team";

import React from "react";

export default function Home() {
  return (
    <div
    >
      <Hero />
      <Learn />
      <Medical />
      <Faqs />
      <Team />
      <Footer />
    </div>
  );
}
