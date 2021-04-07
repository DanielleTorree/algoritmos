/*Terminar este algoritmo*/

//function executar(){
    var A = [1, 2, 3, 4, 5, 6, 7, 8];
    var B = [9, 10, 11, 12, 13, 14, 15, 16];
    var C = [];
   // var D = [];
   // var E = [];

    /*for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? "Digite um número para A: " : "Digite outro número para A: "));
        A.push(numero);
    }*/
    console.log(A);

    /*for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? "Digite um número para B: " : "Digite outro número para B: "));
        B.push(numero);
    }*/
    console.log(B);
    var c = 1;
    var i = 0;
    var x = 0;
    
    while(i < 8){
        while(c <= A[i]){
            x = x + c;
    
            C.push(x)
    
            c++
        }

        i++
    }

    console.log(C);
//}