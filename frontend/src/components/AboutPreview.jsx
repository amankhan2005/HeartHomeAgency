 import React from "react";
import { Link } from "react-router-dom";

/* ===== IMPORT IMAGE MANUALLY ===== */
import aboutImg from "../assets/about/about-preview.avif";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-white to-[#EEF4FF]">
      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0B5ED7]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#0B5ED7]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-5 text-xs sm:text-sm font-semibold text-[#0B5ED7] tracking-widest uppercase">
              Applied Behavior Analysis (ABA) Therapy for Autism
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2540] leading-tight">
              Understanding your child’s needs through{" "}
              <span className="text-[#0B5ED7]">
                evidence-based Applied Behavior Analysis
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We provide personalized, culturally responsive{" "}
              <strong>Applied Behavior Analysis (ABA) therapy</strong> to support
              children with <strong>autism spectrum disorder (ASD)</strong>.
              Our approach focuses on building communication, independence,
              confidence, and meaningful progress for every child and family.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <a
                href="https://calendly.com/alasway/30min?month=2025-12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0B5ED7] hover:bg-[#084298] text-white px-9 py-4 rounded-xl font-semibold shadow-lg transition text-center"
              >
                Schedule a Consultation
              </a>

              <Link
                to="/about-us"
                className="w-full sm:w-auto bg-white text-[#0B5ED7] border border-[#0B5ED7]/30 hover:border-[#0B5ED7] px-9 py-4 rounded-xl font-semibold shadow-sm transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[32px] shadow-2xl p-4">
              <img
                src={aboutImg}
                alt="Applied Behavior Analysis (ABA) therapy for children with autism"
                className="rounded-[28px] object-cover w-full max-w-sm sm:max-w-md lg:max-w-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
