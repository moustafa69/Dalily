var express = require("express");
var router = express.Router();
const { Pool, Client } = require("pg");
const pool = require("../config");

/* GET users listing. */
router.get("/all", function (req, res) {
  pool.query("SELECT * FROM places").then((result) => {
    res.status(200).json(result.rows);
  });
});

router.get("/trendy", function (req, res, next) {
  pool.query("SELECT * FROM places where rating >= 4").then((result) => {
    res.status(200).json(result.rows);
  });
});

router.get("/filter", function (req, res, next) {
  const category = req.query.category;
  console.log(category);
  if (category === "clothing") {
    pool
      .query(`SELECT * FROM places where place_category = '${category}'`)
      .then((result) => res.status(200).json(result.rows));
  } else if (category === "entertainment") {
    pool
      .query(`SELECT * FROM places where place_category = '${category}'`)
      .then((result) => res.status(200).json(result.rows));
  } else if (category === "restaurant") {
    pool
      .query(`SELECT * FROM places where place_category = '${category}'`)
      .then((result) => res.status(200).json(result.rows));
  } else {
    pool
      .query("SELECT * FROM places")
      .then((result) => res.status(200).json(result.rows));
  }
});
module.exports = router;
