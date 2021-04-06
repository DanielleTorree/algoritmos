/*Terminar este algoritmo*/

function executar(){
    var A = [];
    var B = [];
    var C = [];
    var D = [];
    var E = [];

    for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? "Digite um número para A: " : "Digite outro número para A: "));
        A.push(numero);
    }
    // console.log(A);

    for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? "Digite um número para B: " : "Digite outro número para B: "));
        B.push(numero);
    }
    //console.log(B);
}