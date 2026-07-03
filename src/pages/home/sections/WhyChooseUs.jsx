const features = [
  {
    icon: "🌾",
    title: "Heritage Grains",
    description:
      "Rare indigenous rice varieties preserved from generations of farming traditions.",
  },
  {
    icon: "🤝",
    title: "Direct Farmer Partnerships",
    description:
      "We work directly with farmers, tribal communities and women SHGs across Odisha.",
  },
  {
    icon: "✂️",
    title: "Zero Middlemen",
    description:
      "Straight from the farm to your kitchen without unnecessary intermediaries.",
  },
  {
    icon: "🚚",
    title: "Pan India Delivery",
    description:
      "Secure packaging and delivery across India with WhatsApp order support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-green-700 font-semibold mb-4">
            Why Mye Farm
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            More than a marketplace.
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We are building a movement to preserve indigenous agriculture while
            supporting farming communities across Odisha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}