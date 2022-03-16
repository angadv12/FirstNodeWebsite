var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angad\'s Website', name: 'Angad', videodata: vd });
});

module.exports = router;
