const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(jsonParser);

app.enable('trust proxy');

app.use('/teste', require('./route/gcTesteRoute'));

app.use((req,res,next) => {
    const erro = new error('Não Localizado');
    erro.status = 404;
    next(erro);
});

app.use((error,req,res,nest) => {
    res.status (error.status || 500);
    return res.send({
        erro: {
            mensagem: error.menssage
        }
    });
});

module.exports = app;