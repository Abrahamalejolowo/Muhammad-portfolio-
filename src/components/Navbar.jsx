import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#b1e8fd] text-[#1d438a] z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1
          className="font-bold text-[24px] tracking-wide cursor-pointer"
          onClick={() => {
            setActive("#");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          Muhammad
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-[16px]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`transition-colors duration-300 ${
                active === link.href ? "text-[#60A5FA]" : "hover:text-[#60A5FA]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#b1e8fd] text-[#1d438a] border-t border-white/20">
          <div className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`w-full text-left transition-colors duration-300 ${
                  active === link.href
                    ? "text-[#1d438a]"
                    : "text-[#1d438a] hover:text-[#60A5FA]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
