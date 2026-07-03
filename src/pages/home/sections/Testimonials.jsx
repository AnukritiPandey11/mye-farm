const testimonials = [
  {
    name: "Priya Sharma",
    city: "Bengaluru",
    initial: "P",
    review:
      "I ordered the Pimpudibasa rice and was blown away by the aroma when I opened the packet. It tasted completely different from what I get at the supermarket. Will order again.",
  },
  {
    name: "Rahul Mishra",
    city: "Hyderabad",
    initial: "R",
    review:
      "The Roasted Horse Gram Dal is incredible. I can smell it cooking from the next room. Packaging was neat, delivery was on time, and it's great knowing the money goes directly to farmers.",
  },
  {
    name: "Anita Patel",
    city: "Mumbai",
    initial: "A",
    review:
      "Ordering through WhatsApp was surprisingly easy. The Khichdi Mix has become a regular part of our meals and I love that everything feels natural and authentic.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <p className="uppercase tracking-[0.3em] text-[#C9952C] font-semibold mb-6 text-sm">
            WHAT CUSTOMERS SAY
          </p>

          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#082D1A] leading-tight">
            Real People, Real Results
          </h2>

          <p className="mt-8 text-gray-600 text-xl leading-relaxed max-w-3xl">
            From families in cities to health-conscious individuals —
            here's what they think of Mye Farm.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                bg-white
                rounded-3xl
                p-8
                border border-[#ECE7DC]
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8 text-[#D9B86A] text-lg">
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}
              <p className="text-gray-600 italic text-lg leading-relaxed mb-10">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <div className="
                  w-12 h-12
                  rounded-full
                  bg-[#E7F3EA]
                  text-[#0B5D35]
                  flex items-center justify-center
                  font-semibold
                ">
                  {testimonial.initial}
                </div>

                <div>
                  <h4 className="font-semibold text-[#082D1A]">
                    {testimonial.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {testimonial.city}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}