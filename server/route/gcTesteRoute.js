const express = require('express');
const router = express.Router();
const testeService = require('../service/gcTesteService');

router.get('/', async function(req,res){
    try{
     const teste = await testeService.getTeste();
     res.status(200).json(teste);
    } catch(e){
        res.status(404).send(e.menssage)
    }
});

module.exports = router;