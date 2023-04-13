const {Pool} = require('pg');

//use DATABASE_HOST environmental variable if it exists (set by docker compose),
//or default to localhost if no value is set (run outside docker)
const POSTGRES_HOST = process.env.DATABASE_HOST || 'localhost';
const POSTGRES_DB = process.env.POSTGRESS_DB || 'student_renderer';
const POSTGRES_PASSWORD = process.env.POSTGRESS_PASSWORD || 'password';
const POSTGRES_USER = process.env.POSTGRESS_USER || 'postgres';
const DATABASE_URL = process.env.DATABASE_URL;

const dbConfig = {
    user: POSTGRES_USER,
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: 5432
};

//if DATABASE_URL is set as an enviromental variable (from Render), use that
//otherwise, use the config object we defined
const pool = DATABASE_URL ? new Pool({
    connectionString: process.env.DATABASE_URL, 
    ssl: {
     rejectUnauthorized: false
    }
    }) : new Pool(dbConfig);


module.exports = pool;