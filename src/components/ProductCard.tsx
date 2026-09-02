import { useState } from "react";
import { Heart, Mail } from "lucide-react";
import type { Product } from "../types";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm group"
      style={{
        animation: `fadeUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-ink-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-ink-100 animate-pulse" />
        )}
        <img
          src={product.image_url}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-ink-700">
          {product.category}
        </div>
        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Like product"
        >
          <Heart
            size={16}
            className={`transition-colors duration-300 ${
              liked ? "fill-cove-500 text-cove-500" : "text-ink-400"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-xl font-medium text-ink-900">
            {product.name}
          </h3>
          <span className="font-semibold text-cove-600 whitespace-nowrap">
            {product.price}
          </span>
        </div>
        <p className="text-sm text-ink-500 leading-relaxed mb-4">
          {product.description}
        </p>
        <a
          href={`#contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-cove-600 transition-colors duration-300 group/link"
        >
          <Mail size={15} />
          Enquire about this piece
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
