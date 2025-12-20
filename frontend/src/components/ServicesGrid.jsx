 import React, { useState } from "react";
import {
  FaGlobe,
  FaHandsHelping,
  FaSearch,
  FaTachometerAlt,
} from "react-icons/fa";

export default function FullPage() {
  return (
    <div className="bg-[#F7FAFF] text-[#0A2540]">

      {/* ================= HERO / ABOUT ================= */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-[#0B5ED7]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <div className="flex justify-center mb-8">
            <span className="px-8 py-2 rounded-full bg-[#F5F9FF] text-[#0B5ED7] text-sm font-semibold border border-[#D6E4FF]">
              What We Specialize In
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto mb-14">
            Empowering Children with Autism Through{" "}
            <span className="text-[#0B5ED7]">
              Applied Behavior Analysis (ABA)
            </span>{" "}
            and Culturally Responsive Care in Virginia
          </h1>

          <div className="max-w-5xl mx-auto text-left text-[16px] leading-8 space-y-7 text-[#425466]">
            <p>
              <strong>Decoder Health</strong> is a minority woman-owned ABA
              therapy practice committed to providing evidence-based autism
              services in children’s natural environments throughout
              Northern Virginia.
            </p>

            <p>
              Our experienced <strong>Board-Certified Behavior Analysts (BCBAs)</strong>{" "}
              create individualized therapy programs designed around each
              child’s strengths, routines, cultural background, and
              developmental goals.
            </p>

            <p>
              By collaborating with speech, occupational, and physical therapy
              professionals, we deliver a holistic, family-centered approach
              that promotes independence, communication, and long-term success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">
            <a
              href="tel:+15715309004"
              className="px-10 py-4 rounded-full bg-[#0B5ED7] text-white font-semibold text-lg shadow-lg hover:bg-[#094bb5] transition"
            >
              Call Now
            </a>
            <a
              href="mailto:info@DECODERHealth.com"
              className="px-10 py-4 rounded-full border-2 border-[#0B5ED7] text-[#0B5ED7] font-semibold text-lg hover:bg-[#0B5ED7] hover:text-white transition"
            >
              Email Us
            </a>
          </div>

          <p className="mt-8 font-semibold text-[#0B5ED7]">
            Compassionate care starts with a conversation.
          </p>
        </div>
      </section>

      {/* ================= HOW TO GET STARTED ================= */}
      <section className="bg-[#F7FAFF] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">
            How to Get Started with ABA Therapy
          </h2>

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* VIDEO */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/doctor-video.jpg"
                  alt="BCBA explaining ABA therapy process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl text-2xl text-[#0B5ED7]">
                    ▶
                  </div>
                </div>
              </div>
            </div>

            {/* STEPS */}
            <div className="space-y-5">
              <ToggleItem number="1" title="Complete the Intake Form" content="Share your child’s developmental history, routines, preferences, and family information." />
              <ToggleItem number="2" title="Schedule an Initial Consultation" content="Our team schedules a meeting to understand your concerns and explain the process." />
              <ToggleItem number="3" title="BCBA Assessment" content="A Board-Certified Behavior Analyst conducts a comprehensive skills and behavior assessment." />
              <ToggleItem number="4" title="Personalized Treatment Plan" content="An individualized ABA therapy plan is created based on assessment results." />
              <ToggleItem number="5" title="Family Review & Approval" content="You review and approve the treatment plan before implementation." />
              <ToggleItem number="6" title="Insurance Authorization" content="We submit the plan for insurance approval, typically completed in 2–4 weeks." />
              <ToggleItem number="7" title="Begin In-Home Therapy" content="Therapy sessions begin in your home with trained behavior technicians." />
              <ToggleItem number="8" title="Ongoing Support & Monitoring" content="Continuous supervision, progress tracking, and parent collaboration." />
            </div>

          </div>
        </div>
      </section>

      {/* ================= AREAS OF EXPERTISE ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-24">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            <ExpertCard
              icon={<FaGlobe />}
              title="Culturally Responsive Care"
              desc="Respectful, inclusive ABA services designed for diverse families and communities."
            />
            <ExpertCard
              icon={<FaHandsHelping />}
              title="Compassion & Respect"
              desc="Strong relationships built on empathy, dignity, and trust."
            />
            <ExpertCard
              icon={<FaSearch />}
              title="Evidence-Based ABA"
              desc="Therapy strategies grounded in scientific research and proven outcomes."
            />
            <ExpertCard
              icon={<FaTachometerAlt />}
              title="Efficient & Flexible Support"
              desc="Timely responses and adaptable solutions tailored to your child’s needs."
            />
          </div>

        </div>
      </section>

    </div>
  );
}

/* ================= TOGGLE ITEM ================= */
function ToggleItem({ number, title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#E3ECFF] rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#F7FAFF] hover:bg-[#EEF4FF] transition"
      >
        <div className="flex items-center gap-4">
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0B5ED7] text-white font-semibold text-sm">
            {number}
          </span>
          <h3 className="font-semibold text-[16px]">
            {title}
          </h3>
        </div>
        <span className="text-[#0B5ED7] text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-8 pb-6 text-[15px] leading-7 text-[#425466]">
          {content}
        </div>
      )}
    </div>
  );
}

/* ================= EXPERT CARD ================= */
function ExpertCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl px-14 py-16 text-center
      shadow-[0_20px_60px_rgba(11,94,215,0.12)]
      hover:shadow-[0_30px_90px_rgba(11,94,215,0.18)]
      transition">
      <div className="flex justify-center mb-10 text-[#0B5ED7] text-5xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>
      <p className="text-[15px] leading-7 text-[#425466] max-w-sm mx-auto">
        {desc}
      </p>
    </div>
  );
}
