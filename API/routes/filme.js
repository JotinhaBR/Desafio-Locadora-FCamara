var express = require('express');
var router = express.Router();
var mongodbFun = require('../mongodbFun/mongodbFun');

var collectionFilmes = "Filmes";


// cria um novo usuario
router.post('/create', function (req, res, next) {

    var varFun = mongodbFun.create(collectionFilmes, req.body);
    varFun.then(function (value) {
        res.json(value); // Success!
    }, function (reason) {
        res.json(reason); // Error!
    });

});








// deletar um filmes
router.delete('/remove', function (req, res, next) {

    var varFun = mongodbFun.remove(collectionFilmes, req.body);
    varFun.then(function (value) {
        res.json(value); // Success!
    }, function (reason) {
        res.json(reason); // Error!
    });

});








// pegar informações de um filme
router.get('/find', function (req, res, next) {

    var reqID = req.headers.id;
    if (reqID) {
        var query = { id: parseInt(reqID) };
    } else {
        var query = {};
    }

    var varFun = mongodbFun.find(collectionFilmes, query);
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
        var query = { id: parseInt(reqID) };
    } else {
        res.json({ erro: 1, motivo: "Não foi informado o id para a atualização." })
    }

    var varFun = mongodbFun.update(collectionFilmes, query, req.body);
    varFun.then(function (value) {
        res.json(value); // Success!
    }, function (reason) {
        res.json(reason); // Error!
    });

});


module.exports = router;
