export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#003B22] text-[#F8F5EE] pt-24 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid lg:grid-cols-3 gap-16 pb-14 border-b border-white/10">

          {/* Brand Section */}
          <div>
            <img
              src="/logo.png"
              alt="Mye Farm Logo"
              className="h-16 mb-8"
            />

            <p className="text-white/75 leading-relaxed text-lg max-w-sm">
              Empowering rural farmers through direct digital market access
              and bringing authentic farm produce to homes across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9952C] uppercase tracking-[0.25em] text-sm font-semibold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-lg">
              <a
                href="#products"
                className="hover:text-[#C9952C] transition duration-300"
              >
                Products
              </a>

              <a
                href="#story"
                className="hover:text-[#C9952C] transition duration-300"
              >
                Our Story
              </a>

              <a
                href="#impact"
                className="hover:text-[#C9952C] transition duration-300"
              >
                Impact
              </a>

              <a
                href="#contact"
                className="hover:text-[#C9952C] transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9952C] uppercase tracking-[0.25em] text-sm font-semibold mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-lg text-white/80">

              <p>
                N2/24, IRC Village,<br />
                Bhubaneswar, Odisha
              </p>

              <p>
                +91 70777 69100
              </p>

              <p>
                support@mye.farm
              </p>

              <a
                href="https://www.instagram.com/mye.farm?igsh=MTF6MXRvOTAzZ2Nscw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9952C] transition duration-300"
              >
                @mye.farm
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">

          <p>
            © 2025 Mye Farm. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#C9952C] transition duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-[#C9952C] transition duration-300"
            >
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}