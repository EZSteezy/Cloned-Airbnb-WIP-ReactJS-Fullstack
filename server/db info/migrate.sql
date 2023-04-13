CREATE TABLE language (
    lan_id SERIAL PRIMARY KEY NOT NULL,
    lan_type text NOT NULL,
    lan_country text,
    lan_symbol text NOT NULL
)

CREATE TABLE currency (
    cur_id SERIAL PRIMARY KEY NOT NULL,
    cur_country text NOT NULL,
    cur_type text NOT NULL,
    cur_symbol text NOT NULL
)

CREATE TABLE amenities (
    amenity_id SERIAL PRIMARY KEY NOT NULL,
    symbol text NOT NULL,
    sym_descrip text NOT NULL
)
