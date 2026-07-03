const steps = [
  {
    number: "1",
    title: "Cultivated Naturally",
    description:
      "Farmers grow regional produce using traditional knowledge and careful cultivation.",
  },
  {
    number: "2",
    title: "Quality Checked",
    description:
      "Each batch is reviewed and packed to keep it fresh, clean, and ready for shipping.",
  },
  {
    number: "3",
    title: "Order on WhatsApp",
    description:
      "You choose products and share delivery details through a simple WhatsApp message.",
  },
  {
    number: "4",
    title: "Delivered Fresh",
    description:
      "Your order reaches your doorstep across India in the standard delivery window.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#0A3D2A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[0.3em] text-[#D9B86A] font-semibold mb-6 text-sm">
            HOW IT WORKS
          </p>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            From natural cultivation
            <br />
            to fresh delivery
          </h2>

          <p className="mt-8 text-white/75 text-xl leading-relaxed max-w-3xl">
            A simple four-step flow keeps ordering easy while preserving
            product quality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Gold Line */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-[2px] bg-[#C9952C]/60"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center group"
              >
                {/* Circle */}
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#C9952C] bg-[#0A3D2A] flex items-center justify-center text-[#D9B86A] text-4xl font-serif font-bold transition-all duration-500 group-hover:bg-[#C9952C] group-hover:text-[#0A3D2A]">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-white/75 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}