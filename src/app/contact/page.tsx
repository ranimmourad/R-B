export const metadata = {
  title: "Contact — R&B Clothing Store",
  description: "Contactez R&B Clothing Store pour passer commande ou poser une question.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10 pb-6 border-b border-neutral-200">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">R&B</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-700">Nous contacter</h1>
        <p className="text-sm text-neutral-500 mt-2">
          Commande en inbox · Livraison rapide partout en Tunisie
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <h2 className="font-serif text-2xl text-brand-700 mb-4">Comment commander ?</h2>
          <ol className="space-y-3 text-sm text-neutral-700 list-decimal list-inside leading-relaxed">
            <li>Parcourez la boutique et choisissez vos articles préférés.</li>
            <li>
              Notez les références (nom du produit, taille, couleur) — vous pouvez aussi utiliser
              le panier pour préparer votre commande.
            </li>
            <li>
              Envoyez-nous un message privé sur Instagram, Facebook ou WhatsApp avec la liste de
              vos articles et votre adresse de livraison.
            </li>
            <li>Nous confirmons votre commande et organisons la livraison rapide.</li>
          </ol>

          <div className="mt-8 space-y-3 text-sm">
            <p className="font-semibold text-brand-700 uppercase tracking-widest text-xs">
              Nos engagements
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>✓ Livraison rapide partout en Tunisie</li>
              <li>✓ Qualité premium contrôlée</li>
              <li>✓ Prix imbattables</li>
              <li>✓ Service client réactif</li>
            </ul>
          </div>
        </section>

        <section className="bg-brand-50 p-8">
          <h2 className="font-serif text-2xl text-brand-700 mb-6">Nos contacts</h2>

          <div className="space-y-5 text-sm">
            <ContactRow
              label="Instagram"
              value="@rb.clothing.store"
              href="https://www.instagram.com"
            />
            <ContactRow
              label="Facebook"
              value="R&B Clothing Store"
              href="https://www.facebook.com"
            />
            <ContactRow
              label="WhatsApp"
              value="Message privé direct"
              href="https://wa.me/"
            />
            <ContactRow label="Localisation" value="Tunisie — Livraison nationale" />
            <ContactRow label="Horaires" value="Lun. – Sam. · 9h – 19h" />
          </div>

          <p className="mt-8 text-xs text-neutral-500 leading-relaxed">
            Toutes les commandes sont traitées via nos messageries privées pour un service
            personnalisé et rapide.
          </p>
        </section>
      </div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-neutral-500">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 font-medium hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="font-medium text-brand-ink">{value}</p>
      )}
    </div>
  );
}
