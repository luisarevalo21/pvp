const express = require(`express`);
const app = express();

const PORT = process.env.PORT || 3000;

const controller = require("./controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/static`, express.static("public"));
app.use(controller);

app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
});


const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.options("*", cors());

const selectPokemon = "SELECT * FROM pokemon";
const selectFastMoves = "SELECT * FROM pokemon.`pvp_fast_moves`";
const selectChargeMoves = "SELECT * FROM pokemon.pvp_charge_moves";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pokemon"
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


app.listen(3036, () => {
  console.log("data on port 3036");
});