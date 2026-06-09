# R&B Clothing Store

## Project Overview
- **Name**: R&B Clothing Store
- **Goal**: Boutique e-commerce frontend pour R&B Clothing Store (Tunisie) — Mode Homme, Femme & Enfant
- **Tagline**: Qualité premium & prix imbattables · Livraison rapide partout en Tunisie · Commande en inbox chez R&B

## Tech Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 3
- **State**: React Context (cart) + `localStorage` persistence
- **Deployment**: Vercel-ready (frontend only — pas de backend, DB, ni API)

## Brand Identity
- **Primary color**: Burgundy `#5C1A1B` (logo background)
- **Accent**: Cream `#F5EFE0` (logo lettering)
- **Background**: White
- **Typography**: Serif (Georgia) pour titres · Sans-serif (Inter / system) pour le texte

## Pages & Routes
| Route | Description |
|---|---|
| `/` | Accueil (hero, sélections, shop par catégorie/type, nouveautés, CTA) |
| `/shop` | Grille produits avec filtres (rayon, catégorie), recherche, tri |
| `/shop?gender=women\|men\|kids` | Pré-filtrage par rayon (liens du header) |
| `/shop?category=t-shirts\|...` | Pré-filtrage par catégorie |
| `/product/[slug]` | Fiche produit (galerie, couleurs, tailles, quantité, ajout panier) |
| `/cart` | Panier avec mise à jour quantité, suppression, total |
| `/accessories` | Sacs, montres, accessoires, autres |
| `/new-arrivals` | Toutes les nouveautés |
| `/contact` | Comment commander + canaux (Instagram / Facebook / WhatsApp) |
| `/_not-found` | Page 404 |

## Currently Completed Features
- ✅ Header sticky avec navigation desktop & menu mobile + badge panier
- ✅ Footer avec liens et icônes sociales
- ✅ Logo R&B intégré (favicon + header)
- ✅ Page d'accueil complète : hero, bénéfices (livraison/prix/qualité), shop par genre, shop par type, sélection R&B, nouveautés, CTA contact
- ✅ Boutique avec **filtres** (rayon Femme/Homme/Enfant, 11 catégories), **recherche** (debounced), **tri** (prix asc/desc, nom, nouveautés)
- ✅ Cartes produit : image, nom, catégorie, couleurs (pastilles), tailles, prix, statut stock
- ✅ Fiche produit : galerie multi-images, sélecteur couleur, sélecteur taille, sélecteur quantité, bouton « Ajouter au panier », CTA « Commander en inbox », produits similaires
- ✅ Panier complet : ajout/suppression, mise à jour quantité, sous-total, résumé, persistance `localStorage`
- ✅ Pages dédiées : Accessoires, Nouveautés, Contact, 404
- ✅ Données produits mock (37 produits) catégorisées correctement à partir des images uploadées
- ✅ SEO : `metadata` par page, balises OpenGraph, structure sémantique
- ✅ Mobile-first responsive design
- ✅ Type-safe (TypeScript strict, build sans erreur, 45 pages statiques générées)
- ✅ Performance : `next/image` partout, prerendering statique pour tous les produits

## Product Data (Local Mock)
- **37 produits** total répartis sur 3 rayons × 11 catégories
- **Femme** : 4 T-shirts (Christian Louboutin, Tommy Crest, Vogue Marilyn, CK) + Chemise, Jean, Pantalon, Hoodie, Trench, Sneakers, Sac, Montre, Ceinture
- **Homme** : 4 T-shirts (Ralph Lauren, CK, Tommy Flag, Hilfiger Laurel) + Oxford, Slim Jean, Chino, Hoodie, Bomber, Runner, Backpack, Chronographe, Portefeuille, Casquette
- **Enfant** : T-Shirt, Chemise, Jean, Jogger, Hoodie, Doudoune, Sneakers, Sac à dos, Casquette
- **Prix T-shirt par défaut** : 24,900 DT (autres catégories tarifées en cohérence)
- **Toutes les couleurs visibles sur les photos sont extraites** (blanc, noir, navy, gris) puis enrichies par catégorie

## Data Architecture
- **Mock data**: `src/lib/products.ts` (statique, in-memory, typé)
- **Types**: `src/lib/types.ts` (`Product`, `CartItem`, `Gender`, `Category`, `ColorOption`)
- **Cart state**: React Context (`src/lib/cart-context.tsx`) avec reducer + persistance `localStorage`
- **No backend** : aucune API route, aucune DB, aucune authentification

## Folder Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer + CartProvider)
│   ├── globals.css             # Tailwind + brand styles
│   ├── page.tsx                # Home
│   ├── not-found.tsx           # 404
│   ├── shop/page.tsx           # Shop (filters + search + sort)
│   ├── product/[slug]/page.tsx # Product detail (SSG via generateStaticParams)
│   ├── cart/page.tsx           # Cart
│   ├── accessories/page.tsx
│   ├── new-arrivals/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductDetailClient.tsx
│   └── ShopFilters.tsx
└── lib/
    ├── types.ts
    ├── products.ts             # Mock data + helpers + i18n labels
    └── cart-context.tsx
public/
├── logo/logo.png
└── products/*.jpg              # 11 photos produit
```

## User Guide
1. Parcourir le **Shop** ou cliquer sur une catégorie depuis l'accueil.
2. Utiliser les filtres (rayon, catégorie), la recherche et le tri pour affiner.
3. Ouvrir une fiche produit, choisir **couleur**, **taille**, **quantité**, puis **Ajouter au panier**.
4. Aller dans le **Panier** pour ajuster quantités ou supprimer des articles.
5. Cliquer **Commander en inbox** → contactez R&B sur Instagram / Facebook / WhatsApp avec la liste de vos articles.

## Deployment

### Vercel (Production — recommandé)
```bash
npm i -g vercel
vercel              # premier déploiement
vercel --prod       # déploiement en production
```
Le projet est 100 % statique/SSG (45 pages prerendered) — Vercel détecte Next.js automatiquement, aucune variable d'env nécessaire.

### Local
```bash
npm install
npm run dev         # dev server sur http://localhost:3000
npm run build       # production build
npm start           # production server
```

### Sandbox (PM2)
```bash
npm run build
pm2 start ecosystem.config.cjs
curl http://localhost:3000
```

## Features Not Yet Implemented
- ❌ Checkout en ligne (la demande est : commande exclusivement via inbox)
- ❌ Authentification utilisateur (volontairement absent — frontend only)
- ❌ Admin / CMS / Dashboard (volontairement absent)
- ❌ Backend / API / Database (volontairement absent)
- ❌ Avis clients, wishlist, programme de fidélité

## Recommended Next Steps
1. Brancher les liens sociaux du footer/contact sur les vrais comptes Instagram / Facebook / WhatsApp de R&B (mettre à jour les `href`).
2. Remplacer les images mock de catégories secondaires (jeans, hoodies, etc.) par les vraies photos produit quand elles seront disponibles.
3. Ajouter de nouvelles images dans `public/products/` et de nouveaux objets dans `src/lib/products.ts`.
4. Optionnel : configurer un nom de domaine personnalisé sur Vercel (`rb-clothing.tn` par ex.).
5. Optionnel : ajouter un sitemap statique (`src/app/sitemap.ts`) pour le SEO.

## Status
- **Build**: ✅ Successful (45 static pages, 0 errors, 0 warnings)
- **Tests**: ✅ All 8 main routes return HTTP 200
- **Browser**: ✅ No console errors
- **Deployment**: ✅ Vercel-ready
- **Last Updated**: 2026-06-09
