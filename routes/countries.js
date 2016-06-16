var express = require('express'),
    fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var countryData = JSON.parse(fs.readFileSync('./data/countries.json'));
    res.send(countryData);
});

module.exports = router;
