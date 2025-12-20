 import React from "react";
import { FaUserMd } from "react-icons/fa";

// Team images
import amir from "../assets/team/amir.png";
import aadhya from "../assets/team/aadhya.png";
import zaynah from "../assets/team/zaynah.png";

export default function TeamSection() {
  const team = [
    {
      name: "Amir Ansari",
      role: "Clinical Director & BCBA, LBA",
      img: amir,
    },
    {
      name: "Aadhya Mysore",
      role: "Behavior Technician",
      img: aadhya,
    },
    {
      name: "Zaynah Vaidya Shaikh",
      role: "Strategic Engagement Specialist",
      img: zaynah,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0B5ED7] to-[#083B9A] py-28 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADING ===== */}
        <div className="text-center px-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Our Dedicated Team
          </h2>

          <div className="h-2 w-24 mx-auto bg-white rounded-full mt-4"></div>

          <p className="text-white/90 mt-6 max-w-3xl mx-auto text-xl leading-relaxed">
            Meet the professionals delivering compassionate, culturally responsive,
            and evidence-based ABA care.
          </p>
        </div>

        {/* ===== TEAM CARDS ===== */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm transition-transform duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="h-64 w-full bg-[#F5F9FF] flex items-center justify-center">
                <img
                  src={member.img}
                  className="w-full h-full object-contain p-6"
                  alt={member.name}
                />
              </div>

              {/* FLOATING ICON + INFO */}
              <div className="relative -mt-12 px-4 pb-8">

                {/* Floating Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-[#0B5ED7] text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <FaUserMd className="text-xl" />
                  </div>
                </div>

                {/* Info Box */}
                <div className="text-center bg-white rounded-2xl px-6 py-4 shadow-lg">
                  <h3 className="text-lg font-bold text-[#0A2540]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#425466] font-medium mt-1">
                    {member.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
