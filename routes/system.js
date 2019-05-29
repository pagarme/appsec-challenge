var express = require('express');
var router = express.Router();
var cp = require('child_process');

/* GET time. */
router.get('/time', function (req, res) {
    var systemTime = cp.execSync('date');
    res.send(systemTime.toString());
});

/* GET time with custom format. Param ex: T */
router.get('/time/:format', function (req, res) {
    var customFormat = req.params.format || '';
    var command = 'date +"%' + customFormat + '"';
    var systemTime = cp.execSync(command);
    res.send(systemTime.toString());
});

module.exports = router;
