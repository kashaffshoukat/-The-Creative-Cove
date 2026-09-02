import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cove-50/90 backdrop-blur-md shadow-md shadow-ink-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-cove-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-serif text-lg font-semibold">C</span>
          </div>
          <span className="font-serif text-xl font-semibold text-ink-900">
            The Creative Cove
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 hover:text-cove-600 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cove-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.instagram.com/creativecove.bymahnoor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-ink-100 flex items-center justify-center text-ink-600 hover:bg-cove-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Instagram size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-ink-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cove-50/95 backdrop-blur-md border-t border-ink-100 mt-3">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-600 hover:text-cove-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/creativecove.bymahnoor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-cove-600 transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
