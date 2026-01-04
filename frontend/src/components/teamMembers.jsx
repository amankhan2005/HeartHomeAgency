 import React from "react";
import { FaUserMd } from "react-icons/fa";

// Team images
import amir from "../assets/team/amir.png";
import aadhya from "../assets/team/aadhya.png";
import zaynah from "../assets/team/zaynah.png";
import annie from "../assets/team/annie.avif";

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
    {
      name: "Dr. Annie Lasway ",
      role: "Founder & Public Health Researcher",
      img: annie,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0B5ED7] to-[#083B9A] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white">
            Our Dedicated Team
          </h2>
          <div className="h-2 w-24 mx-auto bg-white rounded-full mt-4" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-2xl
                         flex flex-col items-center
                         pt-8 pb-10 px-6
                         transition hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="h-56 w-full bg-[#F5F9FF] rounded-2xl
                              flex items-center justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full object-contain p-6"
                />
              </div>

              {/* ICON (CLOSE TO IMAGE) */}
              <div className="-mt-7 mb-4">
                <div className="w-14 h-14 bg-[#0B5ED7] text-white rounded-full
                                flex items-center justify-center
                                shadow-lg border-4 border-white">
                  <FaUserMd />
                </div>
              </div>

              {/* NAME + ROLE (NO EXTRA GAP) */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#0A2540] leading-tight
                               min-h-[48px] line-clamp-2">
                  {member.name}
                </h3>

                <p className="text-sm text-[#425466] mt-1
                              min-h-[40px] line-clamp-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
