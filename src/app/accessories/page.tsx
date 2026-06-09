import { PRODUCTS } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Accessoires — R&B Clothing Store",
  description: "Sacs, montres, ceintures, casquettes et autres accessoires R&B.",
};

const ACC_CATEGORIES = new Set(["bags", "watches", "accessories", "other"]);

export default function AccessoriesPage() {
  const products = PRODUCTS.filter((p) => ACC_CATEGORIES.has(p.category));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 pb-6 border-b border-neutral-200">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">R&B</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-700">Accessoires</h1>
        <p className="text-sm text-neutral-500 mt-2">
          Sacs, montres, ceintures, portefeuilles et plus encore — {products.length} produits.
        </p>
      </header>
      <ProductGrid products={products} />
    </div>
  );
}
