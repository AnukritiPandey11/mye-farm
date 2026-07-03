import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Products", "#products"],
    ["Story", "#story"],
    ["Impact", "#impact"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5EE]/85 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Mye Farm Logo"
            className="h-14 w-auto transition duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className={`font-medium tracking-wide transition duration-300 hover:text-[#C9952C] ${
                scrolled ? "text-[#0B5D35]" : "text-white"
              }`}
            >
              {name}
            </a>
          ))}

          <a
            href="https://wa.me/917077769100"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B5D35] text-white px-6 py-3 rounded-full hover:bg-[#C9952C] transition duration-300 shadow-lg"
          >
            WhatsApp Orders
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition duration-300 ${
            scrolled ? "text-[#0B5D35]" : "text-white"
          }`}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 mx-4 bg-[#F8F5EE]/95 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="text-[#0B5D35] text-lg font-medium hover:text-[#C9952C] transition duration-300"
              >
                {name}
              </a>
            ))}

            <a
              href="https://wa.me/917077769100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B5D35] text-white py-3 rounded-full text-center hover:bg-[#C9952C] transition duration-300"
            >
              WhatsApp Orders
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}