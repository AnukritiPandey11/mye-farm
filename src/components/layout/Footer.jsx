import {
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0B5D35] text-[#F8F5EE] pt-24 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="Mye Farm"
              className="h-14 mb-6"
            />

            <h2 className="font-serif text-4xl mb-6">
              Preserving Odisha's
              <br />
              Agricultural Heritage
            </h2>

            <p className="text-white/70 max-w-md leading-relaxed">
              Connecting farming communities directly with modern
              kitchens while preserving indigenous grains and
              traditional agricultural wisdom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#C9952C] uppercase tracking-[0.25em] text-sm mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4">
              <a href="#products" className="hover:text-[#C9952C] transition">
                Products
              </a>

              <a href="#story" className="hover:text-[#C9952C] transition">
                Our Story
              </a>

              <a href="#impact" className="hover:text-[#C9952C] transition">
                Impact
              </a>

              <a href="#contact" className="hover:text-[#C9952C] transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9952C] uppercase tracking-[0.25em] text-sm mb-6">
              Connect
            </h3>

            <div className="space-y-5">

              <a
                href="https://wa.me/917077769100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#C9952C] transition"
              >
                <MessageCircle size={18} />
                WhatsApp Orders
              </a>

              <div className="flex items-center gap-3 text-white/70">
                <Mail size={18} />
                contact@myefarm.com
              </div>

              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} />
                Odisha, India
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9952C] transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9952C] transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
          <p>
            © 2026 Mye Farm. All rights reserved.
          </p>

          <p>
            Straight from Farmers to Your Kitchen.
          </p>
        </div>
      </div>
    </footer>
  );
}