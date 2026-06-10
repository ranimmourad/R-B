import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="hero.png"
          alt="R&B Collection"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20">
          <div className="w-1/2">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-brand-700/70 mb-4">
              R&B Clothing Store · Tunisie
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-wide text-brand-700 mb-6">
              Mode Homme & Femme.
              <br />
              Qualité premium, prix imbattables.
            </h1>
            <p className="text-sm sm:text-lg text-neutral-600 mb-8 max-w-md">
              Découvrez notre sélection de t-shirts, chemises, jeans, vestes et accessoires.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center px-6 py-3 bg-brand-700 text-white text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-brand-800 transition-colors"
              >
                Découvrir la boutique
              </Link>
              <Link
                href="/new-arrivals"
                className="inline-flex items-center px-6 py-3 border border-brand-700 text-brand-700 text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-700 hover:text-white transition-colors"
              >
                Nouveautés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Benefit
            title="Livraison rapide"
            desc="Partout en Tunisie sous 24 à 72 h."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="1" y="6" width="15" height="13" />
                <path d="M16 11h5l-3 3v5h-2v-5z" />
                <circle cx="6" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            }
          />
          <Benefit
            title="Prix imbattables"
            desc="Le meilleur rapport qualité-prix du marché."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M20.6 13.4 13 21l-9-9V4h8z" />
                <circle cx="8" cy="8" r="1.4" />
              </svg>
            }
          />
          <Benefit
            title="Qualité premium"
            desc="Coton soigné, finitions impeccables."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl text-brand-700">Nouveautés</h2>
              <p className="text-sm text-neutral-500 mt-1">
                Les dernières pièces ajoutées à la boutique
              </p>
            </div>
            <Link
              href="/new-arrivals"
              className="hidden sm:inline text-xs uppercase tracking-widest text-brand-700 hover:underline"
            >
              Tout voir →
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </section>
      )}
    </>
  );
}

function Benefit({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 py-3">
      <div className="text-brand-700">{icon}</div>
      <h3 className="font-serif text-lg text-brand-700">{title}</h3>
      <p className="text-sm text-neutral-500">{desc}</p>
    </div>
  );
}