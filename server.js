//production

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 3306;

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let selectPokemon = "SELECT * FROM qlpetfztplb4quqy.pokemon";
let selectFastMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_fast_moves";
let selectChargeMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_charge_moves";
let legacyMoves = "SELECT * FROM qlpetfztplb4quqy.legacy_moves";
let connection = null;
// if (process.env.NODE_ENV === "production") {
//   console.log("inside the if");
connection = mysql.createConnection({
  host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qiwlcbe6uzab0j32",
  password: "huo0gh2vl1jdna4k",
  port: "3306",
  database: "qlpetfztplb4quqy"
});

// selectPokemon = "SELECT * FROM qlpetfztplb4quqy.pokemon";
// selectFastMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_fast_moves";
// selectChargeMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_charge_moves";
// legacyMoves = "SELECT * FROM qlpetfztplb4quqy.legacy_moves";

// app.use(express.static(path.join(__dirname, "client/build")));
//}
// Serve any static files
// else {
// console.log("inside the else");
// connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   port: "3036",
//   database: "pokemon"
// });
// app.get("/", (req, res) => {
//   res.send("hello from /");
//   console.log("hello from /");
//   // res.sendFile(path.join((__dirname = "client/public/index.html")));
// });

// selectPokemon = "SELECT * FROM pokemon.pokemon";
// selectFastMoves = "SELECT * FROM pokemon.pvp_fast_moves;";
// selectChargeMoves = "SELECT * FROM pokemon.pvp_charge_moves";
// legacyMoves = "SELECT * FROM pokemon.legacymoves";
//}

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
app.get("/pokemon", (req, res) => {
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

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "client/build/index.html");

  // res.sendFile(path.join(__dirname + "./client/build/index.html"));
  res.sendFile(path.resolve(__dirname + "/app/client/build/index.html"));
});
// app.get("*", function(req, res) {
//   const index = path.join(__dirname, "build", "index.html");
//   res.sendFile(index);
// });
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

// app.get("/", (req, res) => {
//   res.sendFile(path.join((__dirname = "client/build/index.html")));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

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

// app.listen(3036, () => {
//   console.log("data on port 3036");
// });

//Static file declaration
// app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/static", express.static(path.join(__dirname, "client/build")));

// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
//production mode
// if (process.env.NODE_ENV === "production") {
//   // app.use(express.static(path.join(__dirname, "client/build")));
//   //
// }
// app.get("*", (req, res) => {
//   res.sendfile(path.join((__dirname, "client/build", "index.html")));
// });
//build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
