'use strict'

/*importes no modelo antigo - agora não é mais por variável, mas
sim IMPORT msm ok*/
import http from 'http-status';
/*import http = require ('http'); */
/*nome do debug do servidor
const debug = require ('debug') ('nodestr:server');
const express = require ('express');*/
import debug from 'debug';
import expss from 'express';
import routes from '';
/*'./modules/crush/routes';*/
/* xpto= nome da variavel, e dentro da aspas simples o caminho de outro arquivo do seu projeto 
que não esteja na modules, se não referenciar a pasta, ele apontará pro modules*/

expss = express();
http = 3000;
app.set('http', port);

/*Testando Rota com chamada Get request ao HTTP*/
routes = router.get('/', (req, res, next) => {

    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', routes);

Server.listen(http);
console.log('API rodando na porta - Teste GIT' + http);