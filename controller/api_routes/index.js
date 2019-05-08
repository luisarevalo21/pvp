const express = require(`express`);
const router = express.Router();

const movesModel = require(`../../model/moves`);


router.get("/fastmoves", function(req, res){
  movesModel.all(function(data) {
    res.json(data);
  });
});


router.get("/form/:fast_moves", function(req, res) {

  var condition = "fast_moves = " + req.params.fast_moves;
  console.log("Condition: ", condition);

  movesModel.one(condition, function(data) {
    var hbsObject = {
      zips: data
    };
    console.log(hbsObject);
    res.send(data);
  });
});

module.exports = router;