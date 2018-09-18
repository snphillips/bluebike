//  express is the library that makes this all possible
const express = require('express');
const pool = require('./db');


//  Invoke express. Henseforth, app = express
const app = express();



// const http = require('http');

// Database connections
// const { Pool } = require('pg');
// const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: true,
// });

pool.connect();
const { DATABASE_URL } = process.env;


const bodyParser = require('body-parser');
// const routes = require('./routes');
const cors = require('cors');


app.use(bodyParser.json());
// app.use(cors({ origin, credentials: true }));
// app.use('/', routes);




app.get('/', (request, response) => {
  pool.query('SELECT * FROM citibike_rides LIMIT 1;', (err, res) => {
  if (err) return console.log(err);
  console.log("bike trips!!!!!!");
  console.log(res.rows);
  });
});


 module.exports = app;
