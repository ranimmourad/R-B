import { Suspense } from "react";
import {
  CATEGORY_LABELS,
  GENDER_LABELS,
  PRODUCTS,
} from "@/lib/products";
import type { Category, Gender, Product } from "@/lib/types";
import ProductGrid from "@/components/ProductGrid";
import ShopFilters from "@/components/ShopFilters";

export const metadata = {
  title: "Shop — R&B Clothing Store",
  description: "Découvrez toute la collection R&B : Femme, Homme, Enfant et accessoires.",
};

function filterAndSort(
  gender: Gender | null,
  category: Category | null,
  q: string,
  sort: string
): Product[] {
  let list = PRODUCTS.slice();
  if (gender) list = list.filter((p) => p.gender === gender);
  if (category) list = list.filter((p) => p.category === category);
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle) ||
        CATEGORY_LABELS[p.category].toLowerCase().includes(needle)
    );
  }
  switch (sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "new":
      list.sort((a, b) => Number(b.isNew ?? 0) - Number(a.isNew ?? 0));
      break;
  }
  return list;
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    gender?: string;
    category?: string;
    q?: string;
    sort?: string;
  }>;
}) {
  const sp = await searchParams;
  const gender = (sp.gender as Gender) ?? null;
  const category = (sp.category as Category) ?? null;
  const q = sp.q ?? "";
  const sort = sp.sort ?? "default";

  const products = filterAndSort(gender, category, q, sort);

  const headingParts: string[] = [];
  if (gender) headingParts.push(GENDER_LABELS[gender]);
  if (category) headingParts.push(CATEGORY_LABELS[category]);
  const heading = headingParts.length ? headingParts.join(" · ") : "Toute la boutique";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 pb-6 border-b border-neutral-200">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
          R&B · Boutique
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-700">{heading}</h1>
        <p className="text-sm text-neutral-500 mt-2">
          {products.length} produit{products.length > 1 ? "s" : ""}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        <aside>
          <Suspense fallback={<div className="text-sm text-neutral-400">Chargement…</div>}>
            <ShopFilters />
          </Suspense>
        </aside>
        <section>
          <ProductGrid products={products} />
        </section>
      </div>
    </div>
  );
}
