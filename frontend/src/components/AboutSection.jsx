 import { PhoneCall, Stethoscope, Users, ShieldCheck } from "lucide-react";

export default function AboutGentleHearts() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0B3A6A] leading-tight">
          About Gentle Hearts Home Health Care Agency
        </h2>
                  <div className="w-20 h-1.5 bg-[#AF3059] mx-auto rounded-full mt-6" />


        {/* ABOUT CONTENT */}
        <div className="max-w-5xl mx-auto mt-10 space-y-6 text-center text-slate-700 leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-[#0B3A6A]">
              Gentle Hearts Home Health Care Agency
            </span>{" "}
            — a private-pay home health care provider dedicated to delivering
            compassionate, high-touch care in the comfort of home.
          </p>

          <p>
            Our philosophy is rooted in dignity, respect, and clinical
            excellence. We believe every individual deserves personalized care
            that supports not just physical well-being, but emotional comfort
            and peace of mind.
          </p>

          <p>
            Through close collaboration with families and physicians, we ensure
            care is thoughtful, transparent, and aligned with each patient’s
            unique needs and goals.
          </p>

          <p className="font-medium text-[#0B3A6A]">
            At Gentle Hearts, our promise is simple — to care with compassion,
            lead with integrity, and be a trusted partner throughout the care
            journey.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 — TRUSTED BY */}
          <div className="rounded-2xl bg-[#2F628F] p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Trusted By</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Trusted by families, physicians, and luxury elder-care partners
              for reliable, compassionate, and premium in-home care.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-[#2F628F] p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Clinically Guided</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Care plans are physician-informed and guided by best clinical
              practices to ensure safety, comfort, and quality outcomes.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-[#2F628F] p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Private-Pay Model</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Transparent, premium private-pay care without insurance
              limitations — focused entirely on patient needs.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl bg-[#2F628F] p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <PhoneCall className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Care Inquiries</h4>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Connect with our care team to discuss personalized care options
              for you or your loved one.
            </p>
            <span className="font-semibold text-base">
              +1 (XXX) XXX-XXXX
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
