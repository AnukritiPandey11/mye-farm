import { generateWhatsAppLink } from "../../../utils/whatsappLink";

const products = [
  {
    name: "Pimpudibasa Rice",
    description:
      "A highly aromatic indigenous rice variety famous for its fragrance and soft texture.",
    image: "/images/products/Pimpudibasa_Front.png",
  },
  {
    name: "Kalamalliphulla Black Rice",
    description:
      "Rare antioxidant-rich black rice grown using traditional farming practices.",
    image: "/images/products/Kalamalliphulla_Front.png",
  },
  {
    name: "Sonamasoori Rice",
    description:
      "A light and versatile rice variety perfect for everyday cooking.",
    image: "/images/products/Sonamasoori_Front.png",
  },
  {
    name: "Lusuri Red Rice",
    description:
      "Traditional red rice packed with nutrition and earthy flavor.",
    image: "/images/products/Lusuri_Front.png",
  },
  {
    name: "Deshi Mugei Rice",
    description:
      "A heritage Odia rice variety preserved through generations of farming.",
    image: "/images/products/Deshi_Mugei_Rice.png",
  },
  {
    name: "Salafula Rice",
    description:
      "A premium traditional rice variety valued for its taste and texture.",
    image: "/images/products/Salafula_Front.png",
  },
  {
    name: "Whole Green Moong",
    description:
      "Farm-fresh whole green moong sourced directly from farming communities.",
    image: "/images/products/Whole_Moong_Front.png",
  },
  {
    name: "Roasted Moong Dal",
    description:
      "Nutritious roasted moong dal with rich flavor and natural goodness.",
    image: "/images/products/Roasted_Moong_Dal_Front.png",
  },
  {
    name: "Roasted Horse Gram Dal",
    description:
      "Traditional roasted horse gram packed with protein and nutrition.",
    image: "/images/products/Roasted_Horse_Gram_Dal.png",
  },
  {
    name: "Cold Pressed Mustard Oil",
    description:
      "100% pure kachi ghani mustard oil extracted using traditional methods.",
    image: "/images/products/Mustard_Oil.png",
  },
  {
    name: "5 Grain Khichdi Mix",
    description:
      "A wholesome blend of heritage grains designed for nutritious meals.",
    image: "/images/products/Khidi_Mix_Front.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-[#F8F6F1] to-[#EDF4EE]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-green-700 font-semibold mb-4">
            Heritage Collection
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Products with a Story
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Every grain carries generations of agricultural wisdom,
            biodiversity, and community heritage from Odisha's farming traditions.
          </p>

          <div className="mt-8">
            <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-800 font-semibold">
              {products.length} Heritage Products Available
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-[#F1F7F2] rounded-3xl p-6 border border-green-100 hover:border-green-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="h-64 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 min-h-[70px]">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 min-h-[90px]">
                {product.description}
              </p>

              {/* WhatsApp Button */}
              <a
                href={generateWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-800 text-white py-3 rounded-full hover:bg-green-900 transition duration-300 text-center font-medium"
              >
                Order {product.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}