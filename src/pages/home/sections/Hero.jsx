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
    min-h-screen
    flex
    items-center
    justify-center
    px-6
    relative
    overflow-hidden
  "
>
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <motion.div
        className="max-w-5xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-[0.35em] text-green-300 font-semibold mb-6">
          Premium Heritage Agriculture
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
          Straight from Farmers
          <br />
          to Your <span className="text-yellow-300">Kitchen</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Preserving Odisha's indigenous grains and supporting farming
          communities through direct sourcing and transparent delivery.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="#products"
  className="px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300 shadow-lg inline-block"
>
  Explore Products
</a>

          <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Order on WhatsApp
          </button>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </motion.section>
  );
}