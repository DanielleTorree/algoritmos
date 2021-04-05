/*Consertar algoritmo*/

function executar(){
    var A = [];
    var B= [];

    for(var i = 0; i < 8; i++){
        let numero = Number(window.prompt(i == 0 ? 'Digite um número' : 'Digite outro número: '));
        A.push(numero);

        B.push(A[i]*5);
    }

    console.log(`Array A: ${A}`);
    console.log(`Array B (desordenado) ${B}`);

    for(var i = 0; i < 8; i++){
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
        
        var achaNum = false; 
        var inicio = 0;
        var fim = 8;

        while(inicio <= fim && achaNum == false){
            var meio = parseInt((inicio + fim)/2);

            console.log(meio)

            if(pergNum == B[i]){
                achaNum = true;
            } else if(pergNum > B[i]){
                inicio = meio + 1
            } else{
                final = meio - 1
            }
        }

        let mostraNum = achaNum ? ` número ${pergNum} foi encontrado na posição ${meio}` : ` número ${pergNum} não foi encontrado`

        window.alert(mostraNum);

        var perg = window.prompt('Quer continuar? [sim/não]')
    } while(perg == 'sim')
}