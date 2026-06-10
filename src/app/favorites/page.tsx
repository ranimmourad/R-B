"use client";
import { useFavorites } from "@/lib/favorites-context";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl text-brand-700 mb-2">Favoris</h1>
      <p className="text-sm text-neutral-500 mb-8">
        {favorites.length} article{favorites.length !== 1 ? "s" : ""} en favoris
      </p>

      {favorites.length > 0 ? (
        <ProductGrid products={favorites} />
      ) : (
        <div className="text-center py-20">
          <svg
            className="mx-auto mb-4 text-neutral-300"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p className="text-neutral-500 mb-4">Aucun favori pour le moment.</p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-brand-700 text-white text-sm uppercase tracking-widest hover:bg-brand-800 transition-colors"
          >
            Parcourir la boutique
          </Link>
        </div>
      )}
    </main>
  );
}