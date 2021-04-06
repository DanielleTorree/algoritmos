function executar(){
    var A = []; 
    var B = [];

    for(var i = 0; i < 8; i++){
        let numero = parseInt(window.prompt(i == 0? "Digite um número: " : "Digite outro número: "));
        A.push(numero);
        B.push(parseInt(A[i]/2));
    }

    console.log(A);
    console.log(B);

    for(var i = 0; i < 8; i++){

        var x = 0;

        for(var j = i + 1; j < 8; j++){
            
            //A - ordem decrescente
            if(A[i] < A[j]){
                x = A[i];
                A[i] = A[j];
                A[j] = x;
            }

            //B - ordem crescente
            if(B[i] > B[j]){
                x = B[i];
                B[i] = B[j];
                B[j] = x;
            }   
        }
    }

    console.log(A);
    console.log(B);
}