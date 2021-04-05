function executar(){
    var A = [];

    for(var i = 0; i < 12; i++){
        let numero = Number(window.prompt((i == 0) ? "Digite um número: " : "Digite outro número: "));
        A.push(numero);
    }

    console.log(A)

    for(var i = 0; i < 12; i++){
        
        var x = 0;
        
        for(var j = i + 1; j < 12; j++){
            
            if(A[i] < A[j]){
                x = A[i];
                A[i] = A[j];
                A[j] = x;
            }
        }
    }

    console.log(A)
}