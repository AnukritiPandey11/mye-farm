import {
  Wheat,
  Handshake,
  Scissors,
  Truck,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const features = [
  {
    icon: Wheat,
    title: "Direct From Farmers",
    description:
      "Produce is sourced directly from farming communities so growers stay closer to the value they create.",
  },
  {
    icon: Scissors,
    title: "No Middlemen",
    description:
      "A simple digital ordering model keeps the supply chain transparent and unnecessary layers out.",
  },
  {
    icon: Handshake,
    title: "NGO & SHG Partnerships",
    description:
      "We collaborate with NGOs and Self Help Groups to support rural producers at the source.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Products are checked before dispatch for freshness, authenticity and clean packaging.",
  },
  {
    icon: Sprout,
    title: "Indigenous Varieties",
    description:
      "Discover regional rice, lentils and oils with taste profiles rooted in local food traditions.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description:
      "Orders are packed securely and shipped across India with WhatsApp-based coordination.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-28 bg-[#0A3D2A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <p className="uppercase tracking-[0.3em] text-[#D9B86A] font-semibold mb-6 text-sm">
            WHY MYE FARM
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            A cleaner route from rural farms
            <br />
            to your kitchen
          </h2>

          <p className="mt-8 text-white/75 text-xl leading-relaxed max-w-3xl">
            We combine farmer-first sourcing, community partnerships,
            and careful checks so every order carries trust from field
            to doorstep.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  bg-[#F2E4BE]
                  rounded-[28px]
                  p-8
                  shadow-xl
                  border border-[#E7D49C]
                  hover:-translate-y-4
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-500
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    mb-8
                    bg-white/50
                    transition-all duration-500
                    group-hover:bg-[#0B5D35]
                    group-hover:shadow-[0_0_25px_rgba(201,149,44,0.45)]
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className="
                      text-[#0B5D35]
                      transition-all duration-500
                      group-hover:text-[#D9B86A]
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-[#0A3D2A]
                    mb-4
                    transition-colors
                    duration-500
                    group-hover:text-[#8A6515]
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#234233] leading-relaxed text-lg">
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