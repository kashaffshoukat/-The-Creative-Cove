export type ProductCategory = "Clay Art" | "Canvas Art" | "DIY Paint Kits";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  image_url: string;
  featured: boolean;
  created_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  product_id: string | null;
  created_at: string;
}
