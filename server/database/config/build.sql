BEGIN;

DROP TABLE IF EXISTS customers,
packages,
stores CASCADE;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    mobile INT NOT NULL
);

CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile INT NOT NULL,
    account_link VARCHAR(255) NOT NULL
);

CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    customer_id INT REFERENCES customers(id) ON UPDATE CASCADE,
    store_id INT REFERENCES stores(id) ON UPDATE CASCADE
);

INSERT INTO
    customers (name, address, mobile)
VALUES
    ('Nada', 'Gaza', '0597897546'),
    ('Manar', 'Ramallah', '0597897546');

INSERT INTO
    stores (name, mobile, account_link)
VALUES
    (
        'Moda_Turkey',
        '0597897546',
        'https://www.modturky.com/'
    );

INSERT INTO
    packages (name, customer_id, store_id)
VALUES
    ('Dress', '1', '1');

COMMIT;