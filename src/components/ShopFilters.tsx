"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  GENDERS,
  GENDER_LABELS,
} from "@/lib/products";
import type { Category, Gender } from "@/lib/types";

export default function ShopFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const gender = (params.get("gender") as Gender | null) ?? null;
  const category = (params.get("category") as Category | null) ?? null;
  const q = params.get("q") ?? "";
  const sort = params.get("sort") ?? "default";

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (value === null || value === "") next.delete(key);
      else next.set(key, value);
      router.push(`/shop?${next.toString()}`, { scroll: false });
    },
    [params, router]
  );

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
          Recherche
        </label>
        <input
          type="search"
          defaultValue={q}
          placeholder="Rechercher un produit…"
          onChange={(e) => {
            const v = e.target.value;
            // debounce-ish: only update on change for simplicity
            window.clearTimeout((window as any).__rb_search_t);
            (window as any).__rb_search_t = window.setTimeout(
              () => setParam("q", v.trim() || null),
              250
            );
          }}
          className="w-full border border-neutral-300 px-3 py-2 text-sm focus:border-brand-700 outline-none"
        />
      </div>

      {/* Sort */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
          Trier par
        </label>
        <select
          value={sort}
          onChange={(e) => setParam("sort", e.target.value === "default" ? null : e.target.value)}
          className="w-full border border-neutral-300 px-3 py-2 text-sm focus:border-brand-700 outline-none bg-white"
        >
          <option value="default">Pertinence</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="name-asc">Nom (A → Z)</option>
          <option value="new">Nouveautés</option>
        </select>
      </div>

      {/* Gender */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Rayon</h3>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setParam("gender", null)}
              className={`text-sm w-full text-left py-1 ${
                !gender ? "text-brand-700 font-semibold" : "text-neutral-700 hover:text-brand-700"
              }`}
            >
              Tous les rayons
            </button>
          </li>
          {GENDERS.map((g) => (
            <li key={g}>
              <button
                type="button"
                onClick={() => setParam("gender", g)}
                className={`text-sm w-full text-left py-1 ${
                  gender === g
                    ? "text-brand-700 font-semibold"
                    : "text-neutral-700 hover:text-brand-700"
                }`}
              >
                {GENDER_LABELS[g]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Catégorie</h3>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setParam("category", null)}
              className={`text-sm w-full text-left py-1 ${
                !category
                  ? "text-brand-700 font-semibold"
                  : "text-neutral-700 hover:text-brand-700"
              }`}
            >
              Toutes catégories
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setParam("category", c)}
                className={`text-sm w-full text-left py-1 ${
                  category === c
                    ? "text-brand-700 font-semibold"
                    : "text-neutral-700 hover:text-brand-700"
                }`}
              >
                {CATEGORY_LABELS[c]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {(gender || category || q || sort !== "default") && (
        <button
          type="button"
          onClick={() => router.push("/shop", { scroll: false })}
          className="text-xs uppercase tracking-widest text-brand-700 underline"
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  );
}
