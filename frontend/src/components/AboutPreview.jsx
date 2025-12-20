 import React from "react";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-white to-[#EEF4FF]">
      
      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0B5ED7]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#0B5ED7]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-6 text-sm font-semibold text-[#0B5ED7] tracking-widest uppercase">
              Compassionate ABA Care
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2540] leading-tight">
              Understanding your child’s needs through{" "}
              <span className="text-[#0B5ED7]">
                evidence-based behavioral analysis
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
              We provide personalized, culturally competent ABA therapy
              designed to support growth, confidence, and meaningful
              progress for every child and family.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="bg-[#0B5ED7] hover:bg-[#084298] text-white px-9 py-4 rounded-xl font-semibold shadow-lg transition">
                Schedule a Consultation
              </button>

              <button className="bg-white text-[#0B5ED7] border border-[#0B5ED7]/30 hover:border-[#0B5ED7] px-9 py-4 rounded-xl font-semibold shadow-sm transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[32px] shadow-2xl p-4">
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074"
                alt="ABA therapist smiling in clinic"
                className="rounded-[28px] w-120 max-w-xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
