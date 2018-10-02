var express = require('express');
var router = express.Router();
var config = require('../config');
var mongodbFun = require('../mongodbFun/mongodbFun');

var collectionName = "usuarios";



// cria um novo usuario
router.post('/create', function (req, res, next) {

  var varFun = mongodbFun.create(collectionName, req.body);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});








// deletar um usuario
router.delete('/remove', function (req, res, next) {

  var varFun = mongodbFun.remove(collectionName, req.body);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});








// pegar informações de um usuario
router.get('/find', function (req, res, next) {

  var reqID = req.headers.id;
  if (reqID) {
    var query = {id: parseInt(reqID)};
  } else {
    var query = {};
  }

  var varFun = mongodbFun.find(collectionName, query);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});








// pegar informações de um usuario
router.put('/update', function (req, res, next) {

  var reqID = req.headers.id;
  if (reqID) {
    var query = {id: parseInt(reqID)};
  } else {
    res.json({erro: 1, motivo: "Não foi informado o id para a remoção."})
  }

  var varFun = mongodbFun.update(collectionName, query, req.body);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});





module.exports = router;
