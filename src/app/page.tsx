import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORY_LABELS } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  const shopByCategory = [
    { gender: "women" as const, label: "Femme", image: "/products/w-louboutin-white.jpg" },
    { gender: "men" as const, label: "Homme", image: "/products/m-ralph-white.jpg" },
    { gender: "kids" as const, label: "Enfant", image: "kidscategory.webp" },
  ];

  const shopByType = [
    { cat: "t-shirts" as const, image: "/products/w-vogue-white.jpg" },
    { cat: "jeans" as const, image: "" },
    { cat: "hoodies" as const, image: "" },
    { cat: "jackets" as const, image: "" },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
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

      {/* SHOP BY GENDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-brand-700">Shop par catégorie</h2>
            <p className="text-sm text-neutral-500 mt-1">Femme · Homme · Enfant</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {shopByCategory.map((c) => (
            <Link
              key={c.gender}
              href={`/shop?gender=${c.gender}`}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-brand-700 transition-colors"
            >
              <Image
                src={c.image}
                alt={c.label}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand-700/20" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-white px-5 py-3">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Collection</p>
                  <p className="font-serif text-2xl text-brand-700">{c.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-brand-700">Sélection R&B</h2>
            <p className="text-sm text-neutral-500 mt-1">Nos coups de cœur du moment</p>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline text-xs uppercase tracking-widest text-brand-700 hover:underline"
          >
            Tout voir →
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* SHOP BY TYPE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl text-brand-700 mb-8">Shop par type</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {shopByType.map((c) => (
            <Link
              key={c.cat}
              href={`/shop?category=${c.cat}`}
              className="group relative aspect-square overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-brand-700 transition-colors"
            >
              <Image
                src={c.image}
                alt={CATEGORY_LABELS[c.cat]}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white px-3 py-2 text-center">
                <span className="text-xs uppercase tracking-widest text-brand-700">
                  {CATEGORY_LABELS[c.cat]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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