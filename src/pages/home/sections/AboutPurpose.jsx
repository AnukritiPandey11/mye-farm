import { motion } from "framer-motion";
import { generateWhatsAppLink } from "../../../utils/whatsapplink";

export default function AboutPurpose() {
  const ease = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: 1.03,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease,
      },
    },
  };

  const pillars = [
    {
      title: "Tribal Farmer Partnerships",
      description:
        "Working directly with indigenous farming communities across Odisha.",
    },
    {
      title: "Women SHG Processing",
      description:
        "Supporting women-led self help groups through local value creation.",
    },
    {
      title: "Heritage Preservation",
      description:
        "Protecting native crop varieties and traditional farming knowledge.",
    },
    {
      title: "Community Impact",
      description:
        "Ensuring more value returns to the people cultivating the land.",
    },
  ];

  return (
    <section
      id="story"
      className="py-28 bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* Image */}
          <div className="lg:col-span-5">
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
                relative
                rounded-[36px]
                overflow-hidden
                shadow-2xl
                group
              "
            >
              <img
                src="/images/story-image.jpg"
                alt="Mye Farm"
                className="
                  w-full
                  h-auto
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <motion.p
                variants={fadeUp}
                className="
                  uppercase
                  tracking-[0.3em]
                  text-[#C9952C]
                  font-semibold
                  text-sm
                  mb-5
                "
              >
                OUR PURPOSE
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  font-serif
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-[#0B5D35]
                  leading-tight
                  mb-8
                "
              >
                Preserving heritage crops.
                <br />
                Empowering farming communities.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  text-gray-700
                  text-lg
                  leading-relaxed
                  mb-10
                "
              >
                Mye Farm exists to connect modern kitchens with the farmers,
                women self-help groups and rural communities preserving
                Odisha's agricultural heritage through sustainable practices
                and transparent sourcing.
              </motion.p>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-6 border-t border-black/10 pt-8 mb-10">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.title}
                    variants={fadeUp}
                  >
                    <h3 className="font-semibold text-[#0B5D35] mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp}>
                <a
                  href={generateWhatsAppLink("General Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    px-8
                    py-3
                    rounded-full
                    bg-[#0B5D35]
                    text-white
                    hover:bg-[#C9952C]
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}