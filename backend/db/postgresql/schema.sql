-- CREATE TABLE product (
-- 	product_name VARCHAR(200),
-- 	price INT
-- );

-- CREATE TABLE cars (
--     brand VARCHAR(200),
--     model VARCHAR(200),
--     year INT
-- );

-- INSERT INTO product ( product_name, price )
-- VALUES ( 'Dress', 100 ); 

-- INSERT INTO cars ( brand, model, year )
-- VALUES ( 'Toyota', 'Camry', 2025);

-- SELECT * FROM product;
-- SELECT * FROM cars;

-- SELECT product_name, price FROM product;

-- SELECT * FROM product CROSS JOIN cars;



-- CREATE TABLE IF NOT EXISTS product (
--     "product_name" VARCHAR(200),
--     price INT
-- );

CREATE TABLE IF NOT EXISTS cars (
    "brand" VARCHAR(255),
    "model" VARCHAR(255),
    year INT
);

-- INSERT INTO product (product_name, price)
-- VALUES ('Dress', 100);

INSERT INTO cars (brand, model, year)
-- VALUES ('Toyota', 'Camry', 2025);

VALUES
  ('Volvo', 'p1800', 1968),
  ('BMW', 'M1', 1978),
  ('Toyota', 'Celica', 1975);

-- SELECT * FROM product;
SELECT * FROM cars
LIMIT 11;

-- SELECT * FROM product CROSS JOIN cars;

DELETE FROM cars WHERE brand = 'Toyota'

ALTER TABLE cars  
ADD COLUMN IF NOT EXISTS color VARCHAR(255);

UPDATE cars SET color = 'red';