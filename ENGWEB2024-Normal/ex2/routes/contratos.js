var express = require('express');
var router = express.Router();
var Contrato = require("../controllers/contratos");

/* GET home page. */
router.get('/', function(req, res) {
  const tipoprocedimento = req.query.tipoprocedimento;
  const entidade_comunicante = req.query.entidade_comunicante;

  let query = {};

  if (tipoprocedimento) {
    query = { tipoprocedimento: tipoprocedimento };
  } else if (entidade_comunicante) {
    query = { entidade_comunicante: entidade_comunicante };
  }
  Contrato.list(query)
      .then(registros =>{
        const data = registros.map(registro => {
          return {
            idcontrato: registro.idcontrato,
            objectoContrato: registro.objectoContrato,
            dataCelebracaoContrato: registro.dataCelebracaoContrato,
            precoContratual: registro.precoContratual,
            NIPC_entidade_comunicante: registro.NIPC_entidade_comunicante,
            entidade_comunicante: registro.entidade_comunicante
          };
        });
        res.render('index', { title: 'Lista de Contratos 2024', lista: data });
      })
      .catch(erro => res.status(500).send("Erro ao processar a solicitação."));
});  

router.get(':id', function(req, res) {
  const id = req.params.id;

  Contrato.lookUp(id)
      .then(registro => {
        res.render('contrato', { title: 'Contrato', contrato: registro });
      })
      .catch(erro => res.status(500).send("Erro ao processar a solicitação."));
} );

module.exports = router;