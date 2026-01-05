 import React from "react";

 import ServicesSnapshot from "../components/ServicesSnapshot";
import WhyGentleHearts from "../components/WhyGentleHearts";
import CareProcess from "../components/CareProcess";
import AboutPreview from "../components/AboutPreview";
import FinalCTA from "../components/FinalCTA";
import FAQPreview from "../components/FAQPreview";
import AboutSection from "../components/AboutSection";
export default function Home() {
  return (
    <div>
         <AboutPreview />
         <AboutSection />
       <ServicesSnapshot />
      <WhyGentleHearts />
      <CareProcess />
      <FAQPreview />
     
    </div>
  );
}
