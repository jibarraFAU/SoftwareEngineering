var express = require('express');
var router = express.Router();


router.get('/charts', function (req, res, next) {
    res.render('charts.html');
});

module.exports = router;