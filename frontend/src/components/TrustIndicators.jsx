 import { ShieldCheck, HeartPulse, UserCheck, Star } from "lucide-react";

const TrustIndicators = () => {
  const items = [
    { icon: ShieldCheck, text: "Licensed & Certified Caregivers" },
    { icon: HeartPulse, text: "HIPAA-Compliant Care" },
    { icon: UserCheck, text: "Physician-Led Programs" },
    { icon: Star, text: "Private-Pay, High-Touch Model" },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <item.icon className="w-7 h-7 text-[#AF3059]" />
            <p className="font-semibold text-slate-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIndicators;
