var express = require('express');
var router = express.Router();
var mongodbFun = require('../mongodbFun/mongodbFun');

var collectionUsers = "Users";


// cria um novo usuario
router.post('/create', function (req, res, next) {

  var varFun = mongodbFun.create(collectionUsers, req.body);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});








// deletar um usuario
router.delete('/remove', function (req, res, next) {

  var varFun = mongodbFun.remove(collectionUsers, req.body);
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

  var varFun = mongodbFun.find(collectionUsers, query);
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

  var varFun = mongodbFun.update(collectionUsers, query, req.body);
  varFun.then(function (value) {
    res.json(value); // Success!
  }, function (reason) {
    res.json(reason); // Error!
  });

});








// pegar informações de um usuario
router.post('/login', function (req, res, next) {

  var reqEmail = req.body.email;
  var reqSenha = req.body.senha;
  if ((!reqEmail) || (!reqSenha)) {
    res.json({erro: 1, motivo: "Os parametros necessario não foram informados."})
  }

  var query = {email: reqEmail, senha: reqSenha};

  var varFun = mongodbFun.find(collectionUsers, query);
  varFun.then(function (value) {

    // verificando se conta existe
    if(JSON.stringify(value) == "[]"){
      res.json({erro: 1, motivo: "E-mail ou senha informado não é valido."})
      return;
    }

    res.json(value);
  
  }, function (reason) {
    res.json(reason);
  });

});





module.exports = router;
