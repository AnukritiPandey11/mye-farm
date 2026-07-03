import {
  Wheat,
  Users,
  Package,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    number: "50+",
    label: "Heritage Products",
    description: "Preserving indigenous grains and forgotten varieties.",
    icon: Wheat,
    bg: "bg-[#0B5D35]",
    text: "text-[#F8F5EE]",
    iconBg: "bg-[#C9952C]/20",
    iconColor: "text-[#D9B86A]",
  },
  {
    number: "20+",
    label: "Farming Communities",
    description: "Working directly with tribal and women-led groups.",
    icon: Users,
    bg: "bg-[#F7F3EB]",
    text: "text-[#0B5D35]",
    iconBg: "bg-green-100",
    iconColor: "text-[#0B5D35]",
  },
  {
    number: "1000+",
    label: "Deliveries Made",
    description: "Connecting farms directly with kitchens across India.",
    icon: Package,
    bg: "bg-[#C9952C]",
    text: "text-[#2D1B0F]",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    number: "28",
    label: "States Served",
    description: "Bringing Odisha's agricultural heritage nationwide.",
    icon: MapPinned,
    bg: "bg-[#6B4F3B]",
    text: "text-[#F8F5EE]",
    iconBg: "bg-white/10",
    iconColor: "text-[#F8F5EE]",
  },
];

export default function Statistics() {
  return (
    <section
      id="impact"
      className="py-24 bg-gradient-to-b from-[#F8F5EE] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C9952C] font-semibold mb-4">
            OUR IMPACT
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B5D35]">
            Preserving Heritage at Scale
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Every order strengthens farming communities and protects
            indigenous agricultural knowledge for future generations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`${stat.bg} ${stat.text}
                  rounded-[32px]
                  p-8
                  shadow-lg
                  hover:-translate-y-4
                  hover:shadow-2xl
                  hover:scale-[1.03]
                  transition-all
                  duration-500
                  group
                  relative
                  overflow-hidden`}
              >
                {/* Decorative Circle */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>

                {/* Icon */}
                <div
                  className={`${stat.iconBg}
                    w-16 h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:scale-110
                    transition-all
                    duration-300`}
                >
                  <Icon
                    size={30}
                    className={stat.iconColor}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Number */}
                <h3 className="font-serif text-5xl font-bold mb-4">
                  {stat.number}
                </h3>

                {/* Label */}
                <h4 className="text-xl font-semibold mb-3">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="opacity-80 leading-relaxed text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}