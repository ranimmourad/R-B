import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { CATEGORY_LABELS, formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white border border-neutral-200 hover:border-brand-700 transition-colors"
    >
      <div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-brand-700 text-white text-[10px] uppercase tracking-widest px-2 py-1">
            Nouveau
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-2 right-2 bg-neutral-900 text-white text-[10px] uppercase tracking-widest px-2 py-1">
            Rupture
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
          {CATEGORY_LABELS[product.category]}
        </p>
        <h3 className="text-sm font-medium text-brand-ink line-clamp-1 group-hover:text-brand-700">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mt-2">
          {product.colors.slice(0, 5).map((c) => (
            <span
              key={c.hex}
              title={c.name}
              className="w-3.5 h-3.5 rounded-full border border-neutral-300"
              style={{ backgroundColor: c.hex }}
            />
          ))}
          {product.colors.length > 5 && (
            <span className="text-[10px] text-neutral-500">
              +{product.colors.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-base font-semibold text-brand-700">
            {formatPrice(product.price)}
          </span>
          <span
            className={`text-[10px] uppercase tracking-widest ${
              product.inStock ? "text-emerald-700" : "text-neutral-400"
            }`}
          >
            {product.inStock ? "En stock" : "Indisponible"}
          </span>
        </div>

        <div className="mt-2 text-[10px] uppercase tracking-widest text-neutral-500">
          Tailles : {product.sizes.join(" · ")}
        </div>
      </div>
    </Link>
  );
}
