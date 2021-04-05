function executar(){
    var A = [];
    var B= [];

    for(var i = 0; i < 8; i++){
        var numero = Number(window.prompt(i == 0 ? 'Digite um número' : 'Digite outro número: '));
        A.push(numero);

        B.push(A[i]*5);
    }

    console.log(`Array A: ${A}`);
    console.log(`Array B (desordenado) ${B}`);

    for(var i = 0; i < 8; i++){

        var x = 0

        for(var j = i + 1; j < 8; j++){
            if(B[i] > B[j]){
                x = B[i];
                B[i] = B[j];
                B[j] = x
            }
        }
    }

    console.log(`Array B (ordenado) ${B}`);

    do{
        var pergNum = Number(window.prompt('Entre o número a ser pesquisado: '));
        
        var inicio = 0;
        var fim = 8;
        var achaNum = false; 

        while(inicio <= fim && achaNum == false){
            var meio = parseInt((inicio + fim)/2);

            if(pergNum == B[meio]){
                achaNum = true
            } else if(pergNum > B[meio]){
                inicio = meio + 1
            } else{
                fim = meio - 1
            }
        }

        if(achaNum == true){
            window.alert(`número ${pergNum} foi encontrado na posição ${meio}`);
        } else{
            window.alert(`número ${pergNum} não foi encontrado`);
        }

        var perg = window.prompt('Quer continuar? [sim/não]')
    } while(perg == 'sim')
}