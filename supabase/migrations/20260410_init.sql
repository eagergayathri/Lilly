-- Create the products table for LILLY
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  brand TEXT,
  name TEXT,
  price DECIMAL,
  integrity_grade TEXT,
  recommendation TEXT,
  summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial Seed Data
INSERT INTO products (brand, name, price, integrity_grade, recommendation, summary)
VALUES 
  ('OLD NAVY', 'Pixie Skinny Pants', 7.97, 'A+', 'ACT NOW', 'Verified clearance floor.'),
  ('GAP', 'Tech Pants', 29.97, 'A+', 'ACT NOW', 'Extra 50% off applied.');
