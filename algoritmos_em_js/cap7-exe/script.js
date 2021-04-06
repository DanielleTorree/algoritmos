function executar(){
    var A = [];
    var B = [];
    var C = [];

    for(var i = 0; i < 5; i++){
        var numero = Number(window.prompt(i == 0? 'Digite um número para A: ' : 'Digite outro número para A: '));
        A.push(numero);
        C.push(A[i]);
    }

    for(var i = 0; i < 5; i++){
        var numero = Number(window.prompt(i == 0? 'Digite um número para B: ' : 'Digite outro número para B: '));
        B.push(numero);
        C.push(B[i]);
    }

    for(var i = 0; i < C.length - 1; i++){
        
        var x = 0;
        
        for(var j = i + 1; j < C.length; j++){
        
            if(C[i] < C[j]){
                x = C[i];
                C[i] = C[j];
                C[j] = x;
            }
        }
    }

    console.log(C);
}