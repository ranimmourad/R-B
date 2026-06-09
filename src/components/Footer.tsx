import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-brand-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif text-2xl tracking-wider2">R&B</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            R&B Clothing Store — Mode Homme & Femme. Qualité premium &amp; prix imbattables.
            Livraison rapide partout en Tunisie.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4 opacity-70">Boutique</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:opacity-100 opacity-80">Tous les produits</Link></li>
            <li><Link href="/shop?gender=women" className="hover:opacity-100 opacity-80">Femme</Link></li>
            <li><Link href="/shop?gender=men" className="hover:opacity-100 opacity-80">Homme</Link></li>
            <li><Link href="/shop?gender=kids" className="hover:opacity-100 opacity-80">Enfant</Link></li>
            <li><Link href="/new-arrivals" className="hover:opacity-100 opacity-80">Nouveautés</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4 opacity-70">Aide</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:opacity-100 opacity-80">Contact</Link></li>
            <li><span className="opacity-80">Commande via inbox</span></li>
            <li><span className="opacity-80">Livraison rapide</span></li>
            <li><span className="opacity-80">Qualité premium</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4 opacity-70">Suivez-nous</h4>
          <p className="text-sm opacity-80 mb-3">
            Pour commander, contactez-nous directement par message privé.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="border border-brand-cream/40 hover:bg-brand-cream hover:text-brand-700 transition-colors w-9 h-9 inline-flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="border border-brand-cream/40 hover:bg-brand-cream hover:text-brand-700 transition-colors w-9 h-9 inline-flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.2C16.6 2.1 15.5 2 14.3 2 11.8 2 10 3.5 10 6.4V10H7v4h3v8z" />
              </svg>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="border border-brand-cream/40 hover:bg-brand-cream hover:text-brand-700 transition-colors w-9 h-9 inline-flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4A10 10 0 0 0 4 17l-1 5 5-1A10 10 0 1 0 20 4M12 20a8 8 0 0 1-4-1l-3 1 1-3a8 8 0 1 1 6 3m4.5-6c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8.9-.3.1-.5 0-1.1-.4-2-1.2c-.7-.6-1.2-1.5-1.4-1.7s0-.3.1-.5.2-.3.3-.5.1-.2 0-.4-.6-1.5-.8-2c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-.9.9-.9 2.2.9 2.5 1 2.7 1.8 2.7 4.3 3.8c.6.3 1.1.5 1.4.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-70">
          <span>© {new Date().getFullYear()} R&B Clothing Store. Tous droits réservés.</span>
          <span>Made in Tunisia</span>
        </div>
      </div>
    </footer>
  );
}
