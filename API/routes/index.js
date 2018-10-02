var express = require('express');
var router = express.Router();
var mongodbFun = require('../mongodbFun/mongodbFun');

/* GET home page. */
router.get('/', function(req, res, next) {

var busca = mongodbFun.find("usuarios");
busca.then(function(value) {
  res.json(value); // Success!
}, function(reason) {
  res.json(reason); // Error!
});

});

module.exports = router;
