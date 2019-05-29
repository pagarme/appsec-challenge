var express = require('express');
var router = express.Router();
var mysql = require('../database/mysql.js');
var credentials = require('../credentials.js');

/* POST save payments. */
router.post('/', function (req, res) {
  var sql = 'INSERT INTO payments VALUES (' + req.body.amount + ');';

  var mycon = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
  });

  mycon.connect(function (err) {
    mycon.query(sql, (err, res) => { });
    mycon.end();
    res.send('Payment created');
  });
});

module.exports = router;
