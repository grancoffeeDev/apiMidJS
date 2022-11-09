const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'VnBgPQbYzwa95VDm',
    host: '34.95.183.152',
    port: '5432',
    database:'TelemetriaGC',
    allowExitOnIdle: true
});

module.exports = db;