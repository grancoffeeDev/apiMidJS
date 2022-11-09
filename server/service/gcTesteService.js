
const testeData = require('../data/gcTesteData')

exports.getTeste = async function(){
    const teste = testeData.getTeste();
    if(!teste) throw new Error('Consulta não Encontrada');
    return teste;
};