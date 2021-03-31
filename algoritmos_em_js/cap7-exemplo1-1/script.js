function executar(){
    var A = [];
    var B = [];

    for(var i = 0; i < 5; i++){
        if(i == 0){
            A.push(parseInt(window.prompt('Digite um número: ')));
        } else{
            A.push(parseInt(window.prompt('Digite outro número: ')));
        }

        B.push(A[i]/5);
    }
    
    for(var i = 0; i < 5; i++){
        for(var j = i + 1; j < 5; j++){

            if(B[i] < B[j]){
                var menor = B[i];
                B[i] = B[j];
                B[j] = menor;
            }

        }
    }

    // console.log(A);
    console.log(B);
}