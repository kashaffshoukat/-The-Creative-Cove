import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Product, ProductCategory } from "../types";
import { useReveal } from "../hooks/useReveal";
import ProductCard from "./ProductCard";

const categories: ("All" | ProductCategory)[] = [
  "All",
  "Clay Art",
  "Canvas Art",
  "DIY Paint Kits",
];

export default function Collection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [active, setActive] = useState<"All" | ProductCategory>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        setError("We couldn't load the collection. Please try again later.");
      } else if (data) {
        setProducts(data as Product[]);
        setFiltered(data as Product[]);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (active === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === active));
    }
  }, [active, products]);

  return (
    <section id="collection" className="py-24 md:py-32 bg-cove-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""} text-center mb-12`}
        >
          <p className="text-cove-500 font-medium tracking-widest uppercase text-sm mb-3">
            Our Collection
          </p>
          <h2 className="section-title">
            Pieces Made with <span className="italic text-cove-600">Love</span>
          </h2>
          <p className="section-subtitle">
            Every item is handcrafted with care. Browse by category and find
            the perfect piece for your home or a loved one.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-cove-600 text-white shadow-lg shadow-cove-600/25"
                  : "bg-white text-ink-600 border border-ink-200 hover:border-cove-400 hover:text-cove-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="h-64 bg-ink-100 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-ink-100 rounded animate-pulse w-2/3" />
                  <div className="h-4 bg-ink-100 rounded animate-pulse w-full" />
                  <div className="h-4 bg-ink-100 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="text-center py-16">
            <p className="text-ink-500 text-lg">{error}</p>
          </div>
        )}

        {/* Products grid */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <p className="text-center text-ink-500 py-16">
                No products in this category yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
