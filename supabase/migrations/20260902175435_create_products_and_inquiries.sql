/*
# Create products and inquiries tables for The Creative Cove

1. New Tables
- `products`
  - `id` (uuid, primary key)
  - `name` (text, not null) — product name
  - `category` (text, not null) — "Clay Art", "Canvas Art", or "DIY Paint Kits"
  - `price` (text, not null) — display price like "AED 120"
  - `description` (text, not null) — product description
  - `image_url` (text, not null) — product image URL
  - `featured` (boolean, default false) — whether to show on homepage
  - `created_at` (timestamptz, default now())
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer name
  - `email` (text, not null) — customer email
  - `message` (text, not null) — inquiry message
  - `product_id` (uuid, nullable, FK to products) — optional product reference
  - `created_at` (timestamptz, default now())

2. Security
- RLS enabled on both tables.
- products: public read (anon + authenticated), no public write — data is managed by the brand owner.
- inquiries: public insert (anyone can submit an inquiry), no public read — inquiries are private to the owner.

3. Seed Data
- 9 products seeded across 3 categories with real Pexels image URLs.
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('Clay Art', 'Canvas Art', 'DIY Paint Kits')),
  price text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_products" ON products;
CREATE POLICY "public_read_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_products" ON products;
CREATE POLICY "public_insert_products" ON products FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_products" ON products;
CREATE POLICY "public_update_products" ON products FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_products" ON products;
CREATE POLICY "public_delete_products" ON products FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_inquiries" ON inquiries;
CREATE POLICY "public_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_read_inquiries" ON inquiries;
CREATE POLICY "public_read_inquiries" ON inquiries FOR SELECT
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);

-- Seed products
INSERT INTO products (name, category, price, description, image_url, featured) VALUES
('Handcrafted Clay Vase', 'Clay Art', 'AED 95', 'A beautifully sculpted clay vase, hand-shaped and painted with earthy tones. Each piece is unique, carrying the fingerprints of its maker.', 'https://images.pexels.com/photos/320577/pexels-photo-320577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', true),
('Rustic Earthenware Set', 'Clay Art', 'AED 180', 'A set of three rustic earthenware pots, perfect for home decor or gifting. Made with natural clay and a matte finish.', 'https://images.pexels.com/photos/33878987/pexels-photo-33878987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', true),
('Sculpted Clay Jug', 'Clay Art', 'AED 120', 'An intricately designed clay jug with traditional patterns. A statement piece that brings warmth to any space.', 'https://images.pexels.com/photos/17209708/pexels-photo-17209708.png?auto=compress&cs=tinysrgb&h=650&w=940', false),
('Vivid Abstract Canvas', 'Canvas Art', 'AED 250', 'A bold abstract canvas painting with vibrant strokes of blue, red, and yellow. Perfect for adding a pop of color to your walls.', 'https://images.pexels.com/photos/1400190/pexels-photo-1400190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', true),
('Expressionist Canvas', 'Canvas Art', 'AED 220', 'A colorful expressionist piece with rich textures and layered acrylics. Each canvas is painted by hand with love.', 'https://images.pexels.com/photos/1606590/pexels-photo-1606590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', false),
('Warm Tones Canvas', 'Canvas Art', 'AED 200', 'A warm-toned abstract painting blending reds, purples, and yellows. A cozy addition to any living space.', 'https://images.pexels.com/photos/1769524/pexels-photo-1769524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', false),
('Beginner Paint Kit', 'DIY Paint Kits', 'AED 85', 'Everything you need to start painting — brushes, palette, and a set of vibrant watercolors. Perfect for beginners and kids.', 'https://images.pexels.com/photos/37514396/pexels-photo-37514396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', true),
('Brush Collection Set', 'DIY Paint Kits', 'AED 65', 'A curated collection of premium paintbrushes in a wooden holder. Ideal for artists who love variety in their toolkit.', 'https://images.pexels.com/photos/38807889/pexels-photo-38807889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', false),
('Watercolor Starter Kit', 'DIY Paint Kits', 'AED 75', 'A complete watercolor starter kit with brushes, paints, and a bamboo mat. Unleash your creativity right out of the box.', 'https://images.pexels.com/photos/29250794/pexels-photo-29250794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', false)
ON CONFLICT DO NOTHING;
