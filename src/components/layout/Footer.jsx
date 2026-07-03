export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-green-900 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌾 Mye Farm
            </h2>

            <p className="text-green-100 leading-relaxed">
              Preserving indigenous agriculture and supporting farming
              communities across Odisha.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-green-100">
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-green-100">
              <p>📞 +91 70777 69100</p>
              <p>📍 Bhubaneswar, Odisha</p>
              <p>💬 WhatsApp Orders Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
          © 2026 Mye Farm. Straight from Farmers to Your Kitchen.
        </div>
      </div>
    </footer>
  );
}