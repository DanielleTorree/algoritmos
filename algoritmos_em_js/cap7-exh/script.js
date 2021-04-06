function executar(){
    var A = [];
    var B = [];

    for(var i = 0; i < 8; i++){
        var numero = Number(window.prompt(i == 0 ? 'Digite um número inteiro negativo: ' : 'Digite outro número inteiro negativo: '));
        
        if(numero > 0){
            var x = (numero * (-1));

            //console.log("valor de x: " + x);

            A.push(x);   
        } else{
            A.push(numero);

            //console.log("numero: " + numero);
        }

        B.push(A[i]*(-1));
    }

    for(var i = 0; i < 8; i++){
        var x = 0;
        for(var j = i + 1; j < 8; j++){

            if(B[i] < B[j]){
                x = B[i];
                B[i] = B[j];
                B[j] = x;
            }
        }
    }
    console.log(A);
    console.log(B);
}