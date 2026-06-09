"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { CartItem } from "./types";
import { PRODUCTS } from "./products";

interface CartState {
  items: CartItem[];
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; productId: string; size: string; color: string }
  | { type: "UPDATE_QTY"; productId: string; size: string; color: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: CartState };

const STORAGE_KEY = "rb_cart_v1";

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "HYDRATE":
      return action.state;
    case "ADD": {
      const existing = state.items.find(
        (i) =>
          i.productId === action.item.productId &&
          i.size === action.item.size &&
          i.color === action.item.color
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + action.item.quantity } : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE":
      return {
        items: state.items.filter(
          (i) =>
            !(
              i.productId === action.productId &&
              i.size === action.size &&
              i.color === action.color
            )
        ),
      };
    case "UPDATE_QTY":
      return {
        items: state.items
          .map((i) =>
            i.productId === action.productId &&
            i.size === action.size &&
            i.color === action.color
              ? { ...i, quantity: Math.max(1, action.quantity) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clear: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", state: parsed });
        }
      }
    } catch {}
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = state.items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = state.items.reduce((acc, i) => {
      const p = PRODUCTS.find((x) => x.id === i.productId);
      return acc + (p ? p.price * i.quantity : 0);
    }, 0);

    return {
      ...state,
      totalItems,
      subtotal,
      addItem: (item) => dispatch({ type: "ADD", item }),
      removeItem: (productId, size, color) =>
        dispatch({ type: "REMOVE", productId, size, color }),
      updateQuantity: (productId, size, color, quantity) =>
        dispatch({ type: "UPDATE_QTY", productId, size, color, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
