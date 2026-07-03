export default function OurStory() {
  return (
    <section
      id="story"
      className="py-28 bg-gradient-to-b from-[#F8F6F1] to-[#EEF4EE]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Section */}
          <div className="relative group rounded-[36px] overflow-hidden shadow-2xl">

  <img
    src="/images/story-image.jpg"
    alt="Mye Farm Story"
    className="
      w-full
      h-auto
      object-cover
      transition-all
      duration-700
      group-hover:scale-105
    "
  />


          </div>

          {/* Content Section */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-[#EAF3E8] text-[#0B5D35] text-sm font-medium mb-6">
              Our Story
            </div>

            <div className="w-20 h-1 bg-[#C9952C] rounded-full mb-8"></div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0B5D35] leading-tight mb-8">
              Preserving Heritage,
              <br />
              Empowering Farmers.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mye Farm was created with a simple belief:
              India's indigenous grains and traditional farming wisdom
              deserve not only to survive — but to thrive.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We partner directly with tribal farmers, rural communities,
              NGOs and women Self Help Groups across Odisha to bring
              authentic farm produce directly to modern kitchens.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Every order helps preserve biodiversity, support sustainable
              agriculture and strengthen rural livelihoods for generations
              to come.
            </p>

            <a
              href="#products"
              className="
                inline-block
                bg-[#0B5D35]
                text-white
                px-8
                py-4
                rounded-full
                hover:bg-[#C9952C]
                transition-all
                duration-300
                shadow-lg
              "
            >
              Explore Our Products
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}