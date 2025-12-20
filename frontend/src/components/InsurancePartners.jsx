 import React from "react";

import cigna from "../assets/insurance/cigna.png";
import anthem from "../assets/insurance/anthem.png";
import aetna from "../assets/insurance/aetna.png";
import evernorth from "../assets/insurance/evernorth.png";
import medicaid from "../assets/insurance/medicaid.png";
import healthkeepers from "../assets/insurance/healthkeepers.png";

const logos = [
  { src: cigna, alt: "Cigna Insurance" },
  { src: anthem, alt: "Anthem Insurance" },
  { src: aetna, alt: "Aetna Insurance" },
  { src: evernorth, alt: "Evernorth Insurance" },
  { src: medicaid, alt: "Medicaid Insurance" },
  { src: healthkeepers, alt: "Anthem HealthKeepers Plus" },
];

export default function InsurancePartners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== PILL LABEL ===== */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-8 py-2 rounded-full bg-[#F5F9FF] border border-[#D6E4FF] text-[#0B5ED7] text-sm font-semibold tracking-wider">
            Insurance Partners
          </span>
        </div>

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0A2540] leading-tight mb-4">
            Trusted Insurance Coverage
            <br className="hidden sm:block" />
            For Your Therapy Needs
          </h2>
          <p className="text-[15.5px] leading-[1.75] text-[#425466]">
            We collaborate with leading insurance providers to make therapy
            accessible, affordable, and stress-free for families.
          </p>
        </div>

        {/* ===== LOGO GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                group flex items-center justify-center
                h-[210px]
                rounded-2xl
                bg-white
                border border-[#E6EDFF]
                shadow-[0_8px_28px_rgba(11,94,215,0.08)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_16px_40px_rgba(11,94,215,0.16)]
              "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
