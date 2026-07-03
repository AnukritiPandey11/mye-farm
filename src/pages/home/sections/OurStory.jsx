export default function OurStory() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/story-image.jpg"
              alt="Mye Farm Story"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-700 font-semibold mb-4">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-8">
              Preserving Heritage,
              <br />
              Empowering Farmers.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mye Farm was created with a simple belief:
              India's indigenous grains and traditional farming wisdom
              deserve to survive and thrive.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We work directly with tribal farmers, local communities,
              NGOs and women Self Help Groups across Odisha to bring
              authentic farm produce directly to modern kitchens.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Every order supports sustainable agriculture,
              protects biodiversity and strengthens rural livelihoods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}