/* Operações CRUD sobre Contratos 
   2024-05-15 @user
   ----------------------- */
   var express = require('express');
   var router = express.Router();
   var Contrato = require("../controllers/contratos");

/* Get all contracts */

router.get('/', function(req, res) {
    Contrato.list()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/*Get contract by id */

router.get('/:id', function(req, res) {
    Contrato.lookUp(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/*GET /contratos?entidade=EEEE: */

router.get('/', function(req, res) {
    if(req.query.entidade){
        Contrato.listByEntidadeComunicantes(req.query.entidade)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Contrato.list()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

/*GET /contratos?tipo=AAA: */

router.get('/', function(req, res) {
    if(req.query.tipo){
        Contrato.listByTipo(req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Contrato.list()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

/*GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada
alfabeticamente e sem repetições; */

router.get('/entidades', function(req, res) {
    Contrato.listEntidadesComunicantes()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/tipos', function(req, res) {
    Contrato.listTipoProcedimento()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/*POST /contratos: acrescenta um registo novo à BD;*/

router.post('/', function(req, res) {
    Contrato.insert(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/*DELETE /contratos/:id: elimina o registo com o id correspondente; */

router.delete('/:id', function(req, res) {
    Contrato.remove(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/*PUT /contratos/:id: altera o registo com o identificador id. */

router.put('/:id', function(req, res) {
    Contrato.update(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});