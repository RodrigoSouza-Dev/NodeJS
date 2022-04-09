/*Aqui foi criado um modulo*/
/*No JS é preciso criar uma variavel para receber a função*/

var discount = function(valProd, valDisc){
    return valProd - valDisc;
}
/*Após a criação da função/ modulo usamos o MODULE.EXPORTS */
module.exports = discount;
