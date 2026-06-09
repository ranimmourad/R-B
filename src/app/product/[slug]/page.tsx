import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
  CATEGORY_LABELS,
} from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import ProductGrid from "@/components/ProductGrid";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit introuvable — R&B" };
  return {
    title: `${product.name} — R&B Clothing Store`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
        <Link href="/" className="hover:text-brand-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-brand-700">Shop</Link>
        <span className="mx-2">/</span>
        <Link
          href={`/shop?gender=${product.gender}&category=${product.category}`}
          className="hover:text-brand-700"
        >
          {CATEGORY_LABELS[product.category]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">{product.name}</span>
      </nav>

      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="mt-20 pt-12 border-t border-neutral-200">
          <h2 className="font-serif text-2xl text-brand-700 mb-8">Produits similaires</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
