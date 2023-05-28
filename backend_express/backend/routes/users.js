var express = require("express");
var router = express.Router();
const { Pool, Client } = require("pg");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "test_database",
  });
  pool.query("SELECT * FROM user_table").then((result) => {
    console.log(result.rows);
    res.json(result.rows);
  });
});

module.exports = router;
