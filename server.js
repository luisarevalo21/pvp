//production

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 3036;

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let selectPokemon = "";
let selectFastMoves = "";
let selectChargeMoves = "";
let legacyMoves = "";

let connection = null;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  selectPokemon = "SELECT * FROM qlpetfztplb4quqy.pokemon;";
  selectFastMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_fast_moves;";
  selectChargeMoves = "SELECT * FROM qlpetfztplb4quqy.pvp_charge_moves;";
  legacyMoves = "SELECT * FROM qlpetfztplb4quqy.legacy_moves;";
  mewtable = "SELECT * FROM qlpetfztplb4quqy.Mew_table;";

  connection = mysql.createConnection({
    host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "qiwlcbe6uzab0j32",
    password: "huo0gh2vl1jdna4k",
    port: "3306",
    database: "qlpetfztplb4quqy"
  });
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  //
} else {
  selectPokemon = "SELECT * FROM pokemon.pokemon";
  selectFastMoves = "SELECT * FROM pokemon.pvp_fast_moves";
  selectChargeMoves = "SELECT * FROM pokemon.pvp_charge_moves";
  legacyMoves = "SELECT * FROM pokemon.legacymoves";
  mewtable = "SELECT * FROM pokemon.Mew_table;";
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: "3306",
    database: "pokemon"
  });
  app.get("/", (req, res) => {
    res.send("hello from server");
  });
}

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

app.get("/chargemoves/add", (req, res) => {
  const { chargeMoveName, basePower, energy, damagePerEnergy } = req.query;
  console.log(chargeMoveName, basePower, energy, damagePerEnergy);
  const INSERT_INTO_PVP_CHARGE_MOVES = `INSERT INTO pvp_charge_moves(chargeMoveName, basePower, energy, damagePerEnergy) VALUES("${chargeMoveName}", ${basePower}, ${energy}, ${damagePerEnergy}  )`;
  connection.query(INSERT_INTO_PVP_CHARGE_MOVES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("successful push to database");
    }
  });
});

app.get("/fastmoves/add", (req, res) => {
  const {
    fastMoveName,
    basePower,
    energy,
    duration,
    damagePerTurn,
    energyPerTurn
  } = req.query;
  console.log(
    fastMoveName,
    basePower,
    energy,
    duration,
    damagePerTurn,
    energyPerTurn
  );
  const INSERT_INTO_PVP_FAST_MOVES = `INSERT INTO pvp_fast_moves( fastMoveName,
    basePower,
    energy,
    duration,
    damagePerTurn,
    energyPerTurn) VALUES("${fastMoveName}", ${basePower}, ${energy}, ${duration} , ${damagePerTurn} , ${energyPerTurn})`;
  connection.query(INSERT_INTO_PVP_FAST_MOVES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("successful push to database");
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

// app.get("/", (req, res) => {
//   res.sendFile(path.join((__dirname = "client/build/index.html")));
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
app.get("/mewtable", (req, res) => {
  connection.query(mewtable, (err, results) => {
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
