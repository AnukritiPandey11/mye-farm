import {
  Wheat,
  Search,
  ShieldCheck,
  Recycle,
} from "lucide-react";

const values = [
  {
    icon: Wheat,
    title: "Farmer-Owned",
    description:
      "Built around rural producers and fairer access to digital markets.",
  },
  {
    icon: Search,
    title: "Traceable",
    description:
      "Clear sourcing, transparent communication, and direct order support.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic",
    description:
      "Regional staples with no blending, no adulterants, and real farm character.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description:
      "Community-led partnerships that strengthen local food systems.",
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-28 bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="group bg-white rounded-[36px] shadow-2xl p-6">

            <img
              src="/images/story-image.jpg"
              alt="About Mye Farm"
              className="
                w-full
                h-auto
                object-contain
                rounded-[28px]
                transition-all
                duration-700
                group-hover:scale-[1.02]
              "
            />

          </div>

          {/* Right Content */}
          <div>

            {/* Label */}
            <p className="uppercase tracking-[0.3em] text-[#C9952C] font-semibold mb-4 text-sm">
              WHO WE ARE
            </p>

            {/* Heading */}
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0B5D35] leading-tight mb-8">
              About Mye Farm
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              Mye Farm is an agri-tech enabled company based in
              Bhubaneswar, Odisha. We work closely with rural farmers,
              NGOs and Self Help Groups to bridge the gap between farm
              produce and end customers through transparent digital
              channels.
            </p>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="
                      group
                      bg-white
                      rounded-3xl
                      p-6
                      border border-[#ECE7DC]
                      hover:shadow-xl
                      hover:-translate-y-2
                      transition-all
                      duration-500
                    "
                  >
                    {/* Icon */}
                    <div
                      className={`
                        w-14 h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        mb-6
                        ${
                          index % 2 === 0
                            ? "bg-[#F5E8C7] text-[#C9952C]"
                            : "bg-[#E7F3EA] text-[#0B5D35]"
                        }
                      `}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#082D1A] mb-3">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}