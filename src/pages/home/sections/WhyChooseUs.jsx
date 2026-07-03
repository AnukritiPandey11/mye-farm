import {
  Wheat,
  Handshake,
  Scissors,
  Truck,
} from "lucide-react";

const features = [
  {
    id: 1,
    number: "01",
    icon: Wheat,
    title: "Heritage Grains",
    description:
      "Preserving rare indigenous crop varieties and protecting Odisha's agricultural heritage for future generations.",
  },
  {
    id: 2,
    number: "02",
    icon: Handshake,
    title: "Direct Farmer Partnerships",
    description:
      "Working directly with tribal farmers and women self-help groups to ensure fair and transparent sourcing.",
  },
  {
    id: 3,
    number: "03",
    icon: Scissors,
    title: "Zero Middlemen",
    description:
      "Removing unnecessary intermediaries so more value reaches farming communities where it truly belongs.",
  },
  {
    id: 4,
    number: "04",
    icon: Truck,
    title: "Pan India Delivery",
    description:
      "Delivering authentic heritage produce safely and directly to homes across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24 bg-gradient-to-b from-[#faf8f3] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[0.35em] text-[#C9952C] font-semibold mb-4">
            Why Choose Mye Farm
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#082D1A] leading-tight">
            More than a Marketplace
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Every grain we deliver carries the story of communities,
            traditions, and farming practices that deserve to survive in a
            rapidly industrializing world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-gray-300 font-bold text-lg tracking-widest">
                    {feature.number}
                  </span>

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 ${
                      index % 2 === 0
                        ? "bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white"
                        : "bg-yellow-100 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white"
                    }`}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#082D1A] mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}