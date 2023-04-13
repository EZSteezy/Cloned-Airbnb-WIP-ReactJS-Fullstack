const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`DROP TABLE IF EXISTS language, currency, amenities`)
    .then((data) => {
        console.log('Tables dropped!')
        return pool.query(`CREATE TABLE IF NOT EXISTS language (
            lan_id SERIAL PRIMARY KEY NOT NULL,
            lan_type text NOT NULL,
            lan_country text,
            lan_symbol text NOT NULL)`);
    })
.then((data) => {
    console.log(`Table language created`);
    return pool.query(`CREATE TABLE IF NOT EXISTS currency (
        cur_id SERIAL PRIMARY KEY NOT NULL,
        cur_country text NOT NULL,
        cur_type text NOT NULL,
        cur_symbol text NOT NULL)`)
})
.then((data) => {
    console.log(`Table currency created`);
    return pool.query(`CREATE TABLE IF NOT EXISTS amenities(
        amenity_id SERIAL PRIMARY KEY NOT NULL,
        symbol text NOT NULL,
        sym_descrip text NOT NULL)`)
})
.then((data) => {
    console.log(`Table amenities created`)
})
.catch((error) => {
    console.log('Error dropping tables:', error);
})