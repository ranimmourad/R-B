export type Gender = "women" | "men" | "kids";

export type Category =
  | "t-shirts"
  | "shirts"
  | "pants"
  | "jeans"
  | "jackets"
  | "hoodies"
  | "shoes"
  | "bags"
  | "watches"
  | "accessories"
  | "other";

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  gender: Gender;
  category: Category;
  price: number; // in DT
  images: string[];
  colors: ColorOption[];
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}
