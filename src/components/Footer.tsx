import { Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-cove-600 flex items-center justify-center">
                <span className="text-white font-serif text-lg font-semibold">
                  C
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                The Creative Cove
              </span>
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              Handmade with love in UAE. Clay art, canvas pieces, and DIY paint
              kits crafted by Mahnoor.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-ink-300 hover:text-cove-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className="text-ink-300 hover:text-cove-400 transition-colors"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-ink-300 hover:text-cove-400 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-ink-300 hover:text-cove-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-white mb-4">Connect</h4>
            <a
              href="https://www.instagram.com/creativecove.bymahnoor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-300 hover:text-cove-400 transition-colors text-sm"
            >
              <Instagram size={18} />
              @creativecove.bymahnoor
            </a>
            <p className="text-ink-300 text-sm mt-3">
              Based in UAE — shipping available across the Emirates.
            </p>
          </div>
        </div>

        <div className="border-t border-ink-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-400 text-sm">
            © {new Date().getFullYear()} The Creative Cove. All rights reserved.
          </p>
          <p className="text-ink-400 text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-cove-500 text-cove-500" /> in UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
