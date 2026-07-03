import {
  Package,
  MessageCircle,
  Wheat,
} from "lucide-react";

const shippingData = [
  {
    icon: "🇮🇳",
    title: "Pan India Delivery",
    description:
      "We ship to all states and union territories across India. Wherever you are, we'll reach you.",
  },
  {
    icon: Package,
    title: "7–12 Working Days",
    description:
      "Standard delivery timeframe from order confirmation. We keep you updated on WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "Order via WhatsApp",
    description:
      "No app downloads, no accounts. Simply message us with what you want and your delivery address.",
  },
  {
    icon: Wheat,
    title: "Fresh & Sealed",
    description:
      "All products are packed fresh and sealed carefully to preserve quality throughout transit.",
  },
];

export default function ShippingInfo() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A3D2A]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,149,44,0.18),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <p className="uppercase tracking-[0.3em] text-[#D9B86A] font-semibold mb-5 text-sm">
            SHIPPING INFORMATION
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            We Deliver Across India
          </h2>

          <p className="mt-6 text-white/75 text-xl max-w-3xl leading-relaxed">
            From the farms of Odisha to your doorstep —
            wherever you are in India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shippingData.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-white/8
                backdrop-blur-md
                border border-white/10
                rounded-[28px]
                p-8
                hover:-translate-y-3
                hover:bg-white/12
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                transition-all
                duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-full
                  border border-[#C9952C]
                  flex items-center justify-center
                  mb-8
                  text-[#D9B86A]
                  group-hover:bg-[#C9952C]
                  group-hover:text-[#0A3D2A]
                  transition-all duration-500
                "
              >
                {typeof item.icon === "string" ? (
                  <span className="text-2xl">
                    {item.icon}
                  </span>
                ) : (
                  <item.icon
                    size={28}
                    strokeWidth={2}
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/75 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}