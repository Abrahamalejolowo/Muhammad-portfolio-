import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about"); // track active section

  const navLinks = [

    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 20) nav.classList.add("shadow-xl");
      else nav.classList.remove("shadow-xl");

      // Active section detection
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop - 100; // offset for fixed navbar
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with offset
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      const yOffset = -80; // navbar height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 w-full bg-[#2563EB] text-white z-50 transition-shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="font-bold text-[24px] tracking-wide">Muhammad</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[16px] font-bold">
          {navLinks.map((link) => (
            <DesktopLink
              key={link.href}
              href={link.href}
              active={active === link.href}
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </DesktopLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#2563EB] border-t border-white/20"
          >
            <div className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
              {navLinks.map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  active={active === link.href}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </MobileLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* Desktop Link */
function DesktopLink({ href, children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`transition ${
        active ? "text-[#60A5FA]" : "hover:text-[#60A5FA]"
      }`}
    >
      {children}
    </button>
  );
}

/* Mobile Link */
function MobileLink({ href, children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full transition ${
        active ? "text-[#60A5FA]" : "text-white hover:text-[#60A5FA]"
      }`}
    >
      {children}
    </button>
  );
}
