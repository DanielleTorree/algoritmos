/*
Consertar esse algoritmo

function executar(){
    var A = []
    var B = []
    var C = []

    for(var i = 0; i < 10; i++){
        if(i == 0){
            A.push(Number(window.prompt('Digite um número A: ')))
        } else{
            A.push(Number(window.prompt('Digite outro número A: ')))
        }
        C.push(A[i])
    }

    for(var i = 0; i < 10; i++){
        if(i == 0){
            B.push(Number(window.prompt('Digite um número B: ')))
        } else{ 
            B.push(Number(window.prompt('Digite outro número B: ')))
        }
        C.push(B[i])
    }

    for(var i = 0; i < 20; i++){

        var x = 0;

        for(var j = i + 1; j < 20; j++){
            
            if(C[i] > C[j]){
                x = C[i]
                C[i] = C[j]
                C[j] = x
            }
        }
    }   

    console.log(A)
    console.log(B)
    console.log(C)

    do{
        window.alert('Faremos uma pesquisa binária neste algoritmo')
        var pergNum = window.prompt('Entre o número a ser pesquisado: ')

        var i = 0
        var comeco = 0
        var final = 50
        var achaNum = false

        while(comeco <= final && achaNum == false){
            var meio = (comeco + final)/2 
            
            if(C[meio] == pergNum){
                achaNum = true
            } else if(pergNum > C[meio]){
                comeco = meio + 1
            } else{
                final = meio - 1
            }
        }

        if(achaNum == true){
            window.alert(`O número ${pergNum} na posição ${meio}`)
        } else{
            window.alert(`O número ${pergNum} não foi encontrado`)
        }

        var perg = window.prompt('Você deseja continuar? [sim/não]')
    } while(perg == 'sim')
}
*/