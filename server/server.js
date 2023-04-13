'use strict';

//Establish all dependicies for the project
const { Pool } = require('pg');
const ex = require ('express');
const cors = require('cors');
const body = require('body-parser');

//port that express will listean to for requests
const port = process.env.port || 8000;

//using dependcies
const app = ex();
app.use(body.json());
app.use(cors());

const pool = require('./dbConn');

app.get('/language', (req, res, next) => {
    pool.query('SELECT * FROM language', (err, results) => {
        
        if(err){
            return next(err);
        }

        let row = results.rows;
        console.log(row);
        res.send(row);

    })
})

app.get('/currency', (req, res, next) => {
    pool.query('SELECT * FROM currency', (err, results) => {
        
        if(err){
            return next(err);
        }

        let row = results.rows;
        console.log(row);
        res.send(row);

    })
})

app.get('/amenities', (req, res, next) => {
    pool.query('SELECT * FROM amenities', (err, results) => {
        
        if(err){
            return next(err);
        }

        let row = results.rows;
        console.log(row);
        res.send(row);

    })
})

//Port Listeaning
app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log('connecting to postgres pool:', pool);
});


app.use((err, req, res, next) => {
    //console.error('We\'re not here right now');
    console.error(err.slack);
    req.status(400).send('We\'re not here right now');
});

module.exports = app;