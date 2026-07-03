const stats = [
  {
    number: "50+",
    label: "Heritage Products",
  },
  {
    number: "20+",
    label: "Farming Communities",
  },
  {
    number: "1000+",
    label: "Deliveries",
  },
  {
    number: "28",
    label: "States Served",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-4xl md:text-5xl font-bold text-green-800">
                {stat.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}