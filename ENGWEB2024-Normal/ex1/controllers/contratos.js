const mongoose = require('mongoose');
const Contrato = require("../models/contratos");

module.exports.list = () => {
    return Contrato
        .find()
        .exec();
}

module.exports.countContractsByTipoProcedimento = () => {
    return Contrato.aggregate([
        {
            $group: {
                _id: "$tipoprocedimento",
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);
}

/*devolve a lista dos contratos correspondentes à entidade_comunicante EEEE */

module.exports.listByEntidadeComunicantes = (entidade) => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec();
}

/*devolve a lista dos contratos correspondentes ao tipoprocedimento AAAA */

module.exports.listByTipo = (tipo) => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}


module.exports.listEntidadesComunicantes = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort();
}

module.exports.listTipoProcedimento = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort();
}

module.exports.distriboContratos = () => {
    return Contrato.aggregate([
        {
            $group: {
                _id: "$tipoprocedimento",
                count: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);
}

