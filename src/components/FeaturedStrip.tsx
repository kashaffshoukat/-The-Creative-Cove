import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Product } from "../types";
import { useReveal } from "../hooks/useReveal";

export default function FeaturedStrip() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .limit(4);
      if (data) setProducts(data as Product[]);
    })();
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""} text-center mb-10`}
        >
          <p className="text-cove-500 font-medium tracking-widest uppercase text-sm mb-2">
            Featured Pieces
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900">
            Loved by Our Customers
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-72 snap-center group cursor-pointer"
              style={{
                animation: `fadeUp 0.5s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={p.image_url}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-lg text-white">{p.name}</h3>
                  <p className="text-cove-200 text-sm">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
