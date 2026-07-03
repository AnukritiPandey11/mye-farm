import { useState } from "react";
import { generateWhatsAppLink } from "../../../utils/whatsappLink";

const products = [
  {
    category: "Rice",
    name: "Pimpudibasa",
    subtitle: "Indigenous & Super Aromatic",
    description:
      "A traditionally aromatic indigenous rice variety with a unique natural fragrance, soft texture, and rich taste — cultivated using traditional farming practices.",
    image: "/images/products/Pimpudibasa_Front.png",
    prices: ["₹100 / 400g", "₹200 / 900g", "₹400 / 1.9kg"],
  },
  {
    category: "Rice",
    name: "Sonamasoori",
    subtitle: "Mined Rice — Light & Easy to Digest",
    description:
      "A premium lightweight rice variety known for its soft texture, mild aroma, and delicious taste. Less starch and ideal for daily meals.",
    image: "/images/products/Sonamasoori_Front.png",
    prices: ["₹60 / 400g", "₹120 / 900g", "₹240 / 1.9kg"],
  },
  {
    category: "Rice",
    name: "Deshi Mugei Rice",
    subtitle: "Parboiled Rice — Naturally Gluten Free",
    description:
      "A traditional indigenous rice variety valued for its natural taste, soft texture and nutritional richness. Gentle on the stomach.",
    image: "/images/products/Deshi_Mugei_Rice.png",
    prices: ["₹60 / 400g", "₹120 / 900g", "₹240 / 1.9kg"],
  },
  {
    category: "Rice",
    name: "Lusuri Red Rice",
    subtitle: "Hand Pounded",
    description:
      "Traditional hand-pounded red rice retaining its natural bran layer, nutrients and earthy flavour. A true heritage grain from Odisha.",
    image: "/images/products/Lusuri_Front.png",
    prices: ["Contact for Price"],
  },
  {
    category: "Rice",
    name: "Kalamalliphulla",
    subtitle: "Black Rice",
    description:
      "Rare indigenous black rice packed with antioxidants. Naturally pigmented and traditionally valued for its nutritional richness.",
    image: "/images/products/Kalamalliphulla_Front.png",
    prices: ["Contact for Price"],
  },
  {
    category: "Rice",
    name: "Salafula",
    subtitle: "Parboiled Rice",
    description:
      "Traditional parboiled rice retaining nutrients through the parboiling process with firm texture and mild flavour.",
    image: "/images/products/Salafula_Front.png",
    prices: ["Contact for Price"],
  },
  {
    category: "Mixes",
    name: "Khichdi Mix",
    subtitle: "Five Heritage Grains Blend",
    description:
      "A thoughtfully blended multi-grain Khichdi mix combining heritage farm varieties for a nutritious wholesome meal.",
    image: "/images/products/Khidi_Mix_Front.png",
    prices: ["Contact for Price"],
  },
  {
    category: "Pulses",
    name: "Whole Moong",
    subtitle: "Green Moong — High Protein",
    description:
      "Nutrient-rich whole moong with its natural outer layer intact for maximum nutrition and fibre.",
    image: "/images/products/Whole_Moong_Front.png",
    prices: ["₹90 / 400g", "₹180 / 900g", "₹360 / 1.9kg"],
  },
  {
    category: "Pulses",
    name: "Roasted Horse Gram Dal",
    subtitle: "Desi Roasted • Aromatic",
    description:
      "A traditional protein-rich pulse with nutty flavour, roasted naturally for aroma and nutritional value.",
    image: "/images/products/Roasted_Horse_Gram_Dal.png",
    prices: ["₹100 / 400g", "₹200 / 900g", "₹400 / 1.9kg"],
  },
  {
    category: "Pulses",
    name: "Roasted Moong Dal",
    subtitle: "Desi Roasted • Aromatic",
    description:
      "Split moong dal slow roasted traditionally for warmth and earthy aroma. Easy to digest and protein rich.",
    image: "/images/products/Roasted_Moong_Dal_Front.png",
    prices: ["Contact for Price"],
  },
  {
    category: "Oil",
    name: "Kachi Ghani Mustard Oil",
    subtitle: "100% Pure • Cold Pressed",
    description:
      "Pure cold pressed mustard oil extracted using traditional Kachi Ghani methods. No chemicals or refining.",
    image: "/images/products/Mustard_Oil.png",
    prices: ["Contact for Price"],
  },
];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Rice", "Pulses", "Oil", "Mixes"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-[#F8F5EE] to-[#EDF4EE]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C9952C] font-semibold mb-4">
            Heritage Collection
          </p>

          <h2 className="text-5xl font-serif font-bold text-[#1E1E1E]">
            Products with a Story
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Every grain carries generations of agricultural wisdom and
            community heritage from Odisha's farming traditions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium tracking-wide ${
                selectedCategory === category
                  ? "bg-[#0B5D35] text-white border-[#C9952C] shadow-lg scale-105"
                  : "bg-white text-[#0B5D35] border-[#D7E3D8] hover:border-[#C9952C] hover:text-[#C9952C]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="group bg-[#F8F5EE] rounded-[30px] overflow-hidden border border-[#E5DED0] hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="h-64 bg-[#F3EEE4] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              <div className="p-7">
                <p className="uppercase text-xs tracking-[0.25em] text-[#C9952C] font-semibold mb-3">
                  FARM {product.category}
                </p>

                <h3 className="font-serif text-3xl font-bold text-[#1E1E1E] mb-2">
                  {product.name}
                </h3>

                <p className="italic text-gray-500 mb-5">
                  {product.subtitle}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {product.prices.map((price) => (
                    <span
                      key={price}
                      className="bg-[#EAF3E8] text-[#0B5D35] px-4 py-2 rounded-xl font-semibold text-sm"
                    >
                      {price}
                    </span>
                  ))}
                </div>

                <a
                  href={generateWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white py-4 rounded-2xl text-center font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}