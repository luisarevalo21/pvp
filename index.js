const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.options("*", cors());

const selectPokemon = "SELECT * FROM pokemon_db.`pokemon22 - sheet1`";
const selectFastMoves = "SELECT * FROM pokemon_db.pvpfastmoves";
const selectChargeMoves = "SELECT * FROM pokemon_db.pvpchargemoves";
const legacyMoves = "SELECT * FROM pokemon_db.legacy_moves";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pokemon_db"
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  }
});
// app.get("/products/add", (req, res)=>{

// })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/products", (req, res) => {
  connection.query(selectPokemon, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/fastmoves", (req, res) => {
  connection.query(selectFastMoves, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
app.get("/chargemoves", (req, res) => {
  connection.query(selectChargeMoves, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello from the products server");
});

app.get("/legacymoves", (req, res) => {
  connection.query(legacyMoves, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(3036, () => {
  console.log("data on port 3036");
});