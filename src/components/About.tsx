import { Heart, Palette, Sparkles, Globe } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every piece is shaped, painted, and packed by hand — carrying the warmth of its maker.",
  },
  {
    icon: Palette,
    title: "Creative Craft",
    text: "From clay to canvas, each creation is a one-of-a-kind expression of artistry.",
  },
  {
    icon: Sparkles,
    title: "Joy in Every Detail",
    text: "We believe handmade things bring happiness that mass-produced items simply can't.",
  },
  {
    icon: Globe,
    title: "Proudly in UAE",
    text: "Bringing creativity and warmth to homes across the Emirates, mashAllah.",
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            ref={ref}
            className={`reveal ${visible ? "visible" : ""} relative`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/20511244/pexels-photo-20511244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Artist painting on canvas in a bright studio"
                loading="lazy"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] hidden md:block">
              <p className="font-serif text-3xl font-semibold text-cove-600">
                100%
              </p>
              <p className="text-sm text-ink-500 mt-1">
                Handmade — no two pieces are exactly alike
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sage-500 font-medium tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="section-title mb-6">
              Where Creativity
              <br />
              Meets <span className="italic text-sage-600">Heart</span>
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-4">
              The Creative Cove was born from a simple love for making things by
              hand. What started as a personal passion for clay, paint, and
              canvas has grown into a brand that brings warmth and creativity
              to homes across the UAE.
            </p>
            <p className="text-ink-500 text-lg leading-relaxed mb-8">
              Every vase, every canvas, every paint kit is made with intention
              — because we believe that handmade things carry a kind of
              happiness that factory-made items simply can't.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="flex flex-col gap-2"
                  style={{
                    animation: `fadeUp 0.5s ease-out ${i * 0.1}s both`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600">
                    <v.icon size={18} />
                  </div>
                  <h4 className="font-medium text-ink-800 text-sm">
                    {v.title}
                  </h4>
                  <p className="text-sm text-ink-400 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
