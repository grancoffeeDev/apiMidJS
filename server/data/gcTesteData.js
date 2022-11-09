const database = require('../infra/database');
const sqls = require('../sql/gcTeste')

exports.getTeste = async function(){
    return database.query(sqls.getTesteSql);
};