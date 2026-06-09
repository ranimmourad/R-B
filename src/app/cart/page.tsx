"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS, formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clear } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 pb-6 border-b border-neutral-200">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">R&B</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-700">Mon panier</h1>
        <p className="text-sm text-neutral-500 mt-2">
          {totalItems} article{totalItems > 1 ? "s" : ""}
        </p>
      </header>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-neutral-500 mb-6">Votre panier est vide.</p>
          <Link
            href="/shop"
            className="inline-flex items-center px-7 py-3 btn-brand text-sm uppercase tracking-widest"
          >
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          {/* Items list */}
          <section>
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {items.map((item) => {
                const product = PRODUCTS.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <li
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="py-5 flex gap-4 sm:gap-6"
                  >
                    <div className="relative w-20 sm:w-28 aspect-[3/4] bg-neutral-50 shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link
                            href={`/product/${product.slug}`}
                            className="text-sm sm:text-base font-medium text-brand-ink hover:text-brand-700 line-clamp-1"
                          >
                            {product.name}
                          </Link>
                          <p className="text-xs text-neutral-500 mt-1">
                            Couleur : {item.color} · Taille : {item.size}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-brand-700 whitespace-nowrap">
                          {formatPrice(product.price * item.quantity)}
                        </span>
                      </div>

                      <div className="mt-auto flex items-end justify-between pt-3">
                        <div className="inline-flex items-center border border-neutral-300">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 text-neutral-700 hover:text-brand-700"
                            aria-label="Diminuer"
                          >
                            −
                          </button>
                          <span className="w-10 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 text-neutral-700 hover:text-brand-700"
                            aria-label="Augmenter"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId, item.size, item.color)}
                          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-brand-700 underline"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="text-xs uppercase tracking-widest text-brand-700 underline"
              >
                ← Continuer mes achats
              </Link>
              <button
                type="button"
                onClick={clear}
                className="text-xs uppercase tracking-widest text-neutral-500 hover:text-brand-700 underline ml-auto"
              >
                Vider le panier
              </button>
            </div>
          </section>

          {/* Summary */}
          <aside className="bg-brand-50 p-6 self-start">
            <h2 className="font-serif text-xl text-brand-700 mb-6">Résumé</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Sous-total</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Livraison</span>
                <span className="text-neutral-500">Calculée à la commande</span>
              </div>
              <div className="divider pt-3 flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-brand-700">{formatPrice(subtotal)}</span>
              </div>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center btn-brand px-6 py-3.5 text-sm uppercase tracking-widest font-medium"
            >
              Commander en inbox
            </a>
            <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
              Pour finaliser votre commande, contactez R&B en message privé sur Instagram,
              Facebook ou WhatsApp avec la liste de vos articles. Livraison rapide partout en
              Tunisie.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
