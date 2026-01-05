 import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does Gentle Hearts Home Health Care provide?",
    a: "Gentle Hearts provides private-pay, in-home nursing and rehabilitation services including stroke recovery, dementia and Alzheimer’s care, post-surgical recovery, care coordination, and concierge-level support."
  },
  {
    q: "Do you provide care in the patient’s home?",
    a: "Yes. All services are delivered in the comfort and privacy of the patient’s home, allowing for personalized, one-on-one care in a familiar environment."
  },
  {
    q: "What is stroke recovery and neuro-rehabilitation care?",
    a: "Stroke recovery and neuro-rehabilitation focus on helping patients regain mobility, strength, and daily living skills after a stroke or neurological condition through clinically guided, in-home care."
  },
  {
    q: "Do you offer dementia and Alzheimer’s care?",
    a: "Yes. Our caregivers are trained to support individuals with dementia and Alzheimer’s disease using compassionate, structured, and safety-focused care plans tailored to each patient’s needs."
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
      {/* Header */}
      <header className="mb-16 text-center space-y-6">
      

        <h2 className="text-4xl md:text-5xl font-bold text-[#0D3951]">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Clear answers about our in-home nursing, rehabilitation services, and
          private-pay care model.
        </p>

        <div className="w-24 h-1.5 bg-[#AF3059] mx-auto rounded-full" />
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
                  ? "border-[#AF3059]"
                  : "border-gray-100 hover:border-[#AF3059]/30"
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
                          ? "bg-[#AF3059] text-white"
                          : "bg-[#FDEAF1] text-[#AF3059]"
                      }`}
                    >
                      {i + 1}
                    </div>

                    <h3
                      className={`text-lg font-bold transition ${
                        isOpen
                          ? "text-[#AF3059]"
                          : "text-[#0D3951] group-hover:text-[#AF3059]"
                      }`}
                    >
                      {f.q}
                    </h3>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      isOpen
                        ? "bg-[#AF3059]/10 text-[#AF3059] rotate-180"
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
                  <CheckCircle className="w-5 h-5 text-[#AF3059] mt-1" />
                  <p className="text-slate-600 leading-relaxed">
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
