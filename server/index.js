// import components for server
// what is needed here is express, cors, mysql2, and dotenv
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

app = express();

// middleware
// what is needed here is to set up the middleware for express to read json and use cors
app.use(express.json());
app.use(cors());

// database connection
// set up the connection to the database using mysql2
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// routes
// set up your routes here using the get method
app.get("/pokemonlist", (req, res) => {
  const query = "SELECT * FROM pokemonlist WHERE captured = 0;";
  pool.query(query, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

app.post("/pokemonlist", (req, res) => {
  const capturedQuery = "UPDATE pokemonlist SET captured = 1 WHERE id = ?;";
  const id = req.body.id;
  console.log(`this is the id you received from the frontend ${id}`);
  pool.execute(capturedQuery, [id], (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.send(results);
  });
});

// listen to port
// set up the port for the server to listen to
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
