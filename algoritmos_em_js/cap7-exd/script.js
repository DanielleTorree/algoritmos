function executar(){
    var A = [];
    var B = [];
    var C = [];

    for(var i = 0; i < 12; i++){
        let numero = Number(window.prompt(i == 0 ? 'Digite um número para A: ' : 'Digite outro número para A: '));
        A.push(numero);
    }

    
    for(var i = 0; i < 12; i++){
        let numero = Number(window.prompt(i == 0 ? 'Digite um número para B: ' : 'Digite outro número para B: '));
        B.push(numero);
    }

    for(var i = 0; i < 12; i++){
        for(var j = i + 1; j < 12; j++){
            if(A[i] > A[j]){
                x = A[i];
                A[i] = A[j];
                A[j] = x;
            }
        }

        for(var j = i + 1; j < 12; j++){
            if(B[i] > B[j]){
                x = B[i];
                B[i] = B[j];
                B[j] = x;
            }
        }
    }
    console.log(A, B);

    for(var i = 0; i < 12; i++){
        C.push(A[i] + B[i])
    }
    console.log(C);

    for(var i = 0; i < 12; i++){
        for(var j = i + 1; j < 12; j++){
            if(C[i] < C[j]){
                x = C[i];
                C[i] = C[j];
                C[j] = x;
            }
        }    
    }

    console.log(C);
}