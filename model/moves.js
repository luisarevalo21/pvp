// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var movesModel = {
  all: function(cb) {
    orm.all("pvpfastmoves", function(res) {
      cb(res);
    });
  },
  one: function(condition, cb) {
    orm.one("pvpfastmoves", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pvpfastmoves", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pvpfastmoves", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("pvpfastmoves", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = movesModel;