var express = require('express'),
    _ = require('lodash'),
    fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/numbers', function (req, res, next) {
    var array = [];
    while (array.length < 100) {
        let rand = getRandomInt(0, 1000);
        if (!_.includes(array, rand)) {
            array.push(rand);
        }
    }
    res.send({
        numbers: array
    });
});

/* GET users listing. */
router.get('/words', function (req, res, next) {
    var countryData = JSON.parse(fs.readFileSync('./data/countries.json'));
    var names = _.map(countryData.countries, 'name');
    res.send({
        words: _.shuffle(names)
    });
});

/* GET users listing. */
router.get('/countries', function (req, res, next) {
    var countryData = JSON.parse(fs.readFileSync('./data/countries.json'));
    res.send(countryData);
});

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = router;
