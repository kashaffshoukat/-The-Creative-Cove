import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cove-100 via-cove-50 to-sage-50"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cove-200/40 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-cove-300/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-cove-200 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-cove-500" />
          <span className="text-sm font-medium text-ink-600">
            Handmade with Love in UAE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-ink-900 leading-[1.05] animate-fade-up">
          The Creative
          <br />
          <span className="text-cove-600 italic">Cove</span>
        </h1>

        <p
          className="text-lg md:text-xl text-ink-500 max-w-2xl mx-auto mt-8 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Clay art, canvas pieces, and DIY paint kits — each crafted by hand
          with warmth and creativity. Bringing happiness to homes across the
          UAE, one piece at a time.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <a href="#collection" className="btn-primary">
            Explore Collection
          </a>
          <a href="#about" className="btn-outline">
            Our Story
          </a>
        </div>
      </div>

      <a
        href="#collection"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 hover:text-cove-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
