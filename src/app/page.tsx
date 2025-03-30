import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Learn from "@/components/learn";
import Medical from "@/components/medicalVirtual";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <Hero />
      <Learn/>
      <Medical/>
      <Faqs />
      <Footer />
    </div>
  );
}
