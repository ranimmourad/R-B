import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">R&B · 404</p>
      <h1 className="font-serif text-4xl text-brand-700 mb-4">Page introuvable</h1>
      <p className="text-neutral-600 mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-7 py-3 btn-brand text-sm uppercase tracking-widest"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
