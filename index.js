/*Criando um servidor com nodeJS */
var http = require('http');

http.createServer(function(req, res){
    res.end("Gerenciador Financeiro");
}).listen(3000);


/*Após a criação do SERVIDOR é preciso estartar o servidor pelo PROMPT de COMANDO */
/*Entre no diretório do codigo e então digite NODE INDEX.JS */ 
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
/*Aqui foi instalado e usado o NODE EXPRESS*/
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Rodrigo Souza");
})

/*
app.get("/contato", function(req, res){
    res.send("Pagina de contato");
})
*/
app.listen(8000);

/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
/*Foi Criado um módulo em um arquivo callFuction.js que será usado no código abaixo: */
console.log("Gerenciador Financeiro");

var client = "Rodrigo Souza";

console.log("Cliente:" + client);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calFuction");

var finalValue = discountFunc(valProduct, valDiscount);

console.log("Valor final do produto: R$ " + finalValue);