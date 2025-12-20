 import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "What is ABA?",
    a: "Applied Behavior Analysis (ABA) is an evidence-based therapy focused on improving socially significant behaviors such as communication, learning, and daily living skills using positive reinforcement."
  },
  {
    q: "What is the purpose of the ABA program?",
    a: "The goal of an ABA program is to help individuals increase useful behaviors and reduce behaviors that interfere with learning, independence, and quality of life."
  },
  {
    q: "What is telemedicine?",
    a: "Telemedicine allows therapy and clinical services to be delivered remotely using secure video conferencing, making care more accessible and flexible for families."
  },
  {
    q: "Which services may be provided via telemedicine?",
    a: "Services such as parent training, caregiver coaching, assessments, progress reviews, and clinical supervision may be provided through telemedicine when appropriate."
  },
  {
    q: "What is ASD?",
    a: "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects communication, social interaction, and behavior, with varying levels of support needs."
  },
  {
    q: "What ICD-10 codes are used for autism?",
    a: "The most commonly used ICD-10 code for Autism Spectrum Disorder is F84.0. Additional codes may be used depending on associated conditions or developmental delays."
  },
  
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (openIndex === idx) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
      } else {
        el.style.maxHeight = "0px";
        el.style.opacity = "0";
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faq-preview"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative overflow-hidden"
    >
      {/* Background Decoration (BLUE) */}
      <div className="absolute top-0 left-0 w-96 h-96    rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80   rounded-full blur-3xl -z-10" />

      {/* Header */}
      <header className="mb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#F5F9FF] border border-[#D6E4FF] text-[#0B5ED7] px-5 py-2.5 rounded-full text-sm font-semibold">
          <HelpCircle className="w-4 h-4" />
          Common Questions
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-tight">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-lg md:text-xl text-[#425466] max-w-3xl mx-auto leading-relaxed">
          Clear answers about{" "}
          <span className="text-[#0B5ED7] font-semibold">ABA therapy</span>,
          autism, and telehealth services.
        </p>

        <div className="w-24 h-1.5 bg-gradient-to-r from-[#0B5ED7] to-[#084298] mx-auto rounded-full" />
      </header>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={f.q}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                isOpen
                  ? "border-[#0B5ED7] shadow-blue-100"
                  : "border-gray-100 hover:border-[#0B5ED7]/30"
              }`}
            >
              {/* Question */}
              <button
                type="button"
                className="w-full text-left p-6 sm:p-7"
                onClick={() => toggle(i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition ${
                        isOpen
                          ? "bg-[#0B5ED7] text-white"
                          : "bg-[#F5F9FF] text-[#0B5ED7]"
                      }`}
                    >
                      {i + 1}
                    </div>

                    <h3
                      className={`text-lg font-bold transition ${
                        isOpen
                          ? "text-[#0B5ED7]"
                          : "text-[#0A2540] group-hover:text-[#0B5ED7]"
                      }`}
                    >
                      {f.q}
                    </h3>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      isOpen
                        ? "bg-[#0B5ED7]/10 text-[#0B5ED7] rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="px-6 sm:px-7 overflow-hidden transition-all duration-300"
                style={{ maxHeight: 0, opacity: 0 }}
              >
                <div className="pb-6 pt-2 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B5ED7] mt-1" />
                  <p className="text-[#425466] leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
