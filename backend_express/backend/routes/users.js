var express = require("express");
var router = express.Router();
const pool = require("../config");

/* GET users listing. */

router.get("/", function (req, res, next) {
  pool.query("SELECT * FROM user_table").then((result) => {
    res.send(200);
  });
});

router.post("/register", function (req, res, next) {
  const { username, password, email } = req.body;
  console.log(username, password, email);
  pool
    .query(
      `INSERT INTO user_table (name, password, email) VALUES ('${username}', '${password}', '${email}')`
    )
    .then((result) => {
      res.status(201).json(result.rows);
    });
});

router.post("/login", function (req, res, next) {
  const { useremail, password } = req.body;
  pool
    .query(`SELECT * FROM user_table WHERE email = '${useremail}';`)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
      } else if (result.rows[0].password !== password) {
        res.status(401).json({ message: "Wrong password" });
      } else {
        res.status(201).json(result.rows[0]);
      }
    });
});

module.exports = router;
