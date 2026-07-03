import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, 800],
    [0, 250]
  );

  return (
    <motion.section
      style={{
        backgroundPositionY: backgroundY,
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
      className="
        min-h-[82vh]
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
      "
    >
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero Content */}
      <motion.div
        className="max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Premium Badge */}
        <div className="inline-block mb-5 px-5 py-2 rounded-full border border-[#C9952C]/40 bg-[#C9952C]/10 backdrop-blur-md">
          <p className="uppercase tracking-[0.25em] text-[#D9B86A] text-xs font-semibold">
            Premium Heritage Agriculture
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight">
          Straight from Farmers
          <br />
          to Modern Kitchens
        </h1>

        {/* Description */}
        <p className="mt-5 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Preserving Odisha's indigenous grains while supporting farming
          communities through direct sourcing, transparent delivery and
          sustainable agriculture.
        </p>

        {/* CTA Buttons */}
       <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">

  <a
    href="#products"
    className="
      px-7 py-2.5
      border border-white/30
      bg-white/10
      backdrop-blur-lg
      text-white
      rounded-full
      hover:bg-white/20
      transition-all
      duration-300
    "
  >
    Explore
  </a>

  <a
    href="https://wa.me/917077769100"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-7 py-2.5
      bg-[#0B5D35]
      text-white
      rounded-full
      hover:bg-[#0E6B3D]
      transition-all
      duration-300
      shadow-lg
    "
  >
    WhatsApp Orders
  </a>

</div>
       {/* Trust Indicators */}
<div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto border-t border-white/15 pt-4">
  <div>
    <h3 className="font-serif text-xl md:text-2xl text-[#D9B86A] font-semibold">
      100%
    </h3>
    <p className="text-white/70 uppercase tracking-[0.12em] text-[10px] mt-1">
      Farm Sourced
    </p>
  </div>

  <div>
    <h3 className="font-serif text-xl md:text-2xl text-[#D9B86A] font-semibold">
      7-12
    </h3>
    <p className="text-white/70 uppercase tracking-[0.12em] text-[10px] mt-1">
      Working Days
    </p>
  </div>

  <div>
    <h3 className="font-serif text-xl md:text-2xl text-[#D9B86A] font-semibold">
      Pan India
    </h3>
    <p className="text-white/70 uppercase tracking-[0.12em] text-[10px] mt-1">
      Delivery
    </p>
  </div>
</div>
      </motion.div>

      
    </motion.section>
  );
}