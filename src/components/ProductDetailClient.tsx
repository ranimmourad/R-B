"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!product.inStock) return;
    addItem({
      productId: product.id,
      quantity: qty,
      size: selectedSize,
      color: selectedColor,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
      {/* Gallery */}
      <div>
        <div className="relative aspect-[3/4] bg-neutral-50 border border-neutral-200">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-3 mt-3">
            {product.images.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-square border ${
                  idx === selectedImage ? "border-brand-700" : "border-neutral-200"
                }`}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
          R&B · {product.gender === "women" ? "Femme" : product.gender === "men" ? "Homme" : "Enfant"}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-700 mb-4">{product.name}</h1>
        <p className="text-2xl font-semibold text-brand-ink mb-6">
          {formatPrice(product.price)}
        </p>
        <p className="text-neutral-600 leading-relaxed mb-8">{product.description}</p>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Couleur : <span className="text-brand-ink">{selectedColor}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c.hex}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                aria-label={c.name}
                className={`w-9 h-9 rounded-full border-2 transition-colors ${
                  selectedColor === c.name ? "border-brand-700" : "border-neutral-300"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Taille</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`min-w-[44px] px-3 py-2 text-sm border transition-colors ${
                  selectedSize === s
                    ? "border-brand-700 bg-brand-700 text-white"
                    : "border-neutral-300 hover:border-brand-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Quantité</h3>
          <div className="inline-flex items-center border border-neutral-300">
            <button
              type="button"
              onClick={() => setQty((v) => Math.max(1, v - 1))}
              className="w-10 h-10 text-lg text-neutral-700 hover:text-brand-700"
              aria-label="Diminuer"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border-x border-neutral-300 h-10 text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => setQty((v) => v + 1)}
              className="w-10 h-10 text-lg text-neutral-700 hover:text-brand-700"
              aria-label="Augmenter"
            >
              +
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!product.inStock}
            className="flex-1 btn-brand px-6 py-3.5 text-sm uppercase tracking-widest font-medium disabled:opacity-50"
          >
            {added ? "Ajouté au panier ✓" : product.inStock ? "Ajouter au panier" : "Indisponible"}
          </button>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline px-6 py-3.5 text-sm uppercase tracking-widest font-medium text-center"
          >
            Commander en inbox
          </a>
        </div>

        {/* Stock status */}
        <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
          <span
            className={`w-2 h-2 rounded-full ${
              product.inStock ? "bg-emerald-600" : "bg-neutral-400"
            }`}
          />
          {product.inStock ? "En stock — expédition rapide" : "Produit actuellement indisponible"}
        </div>
      </div>
    </div>
  );
}
