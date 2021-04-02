function executar() {
    var A = []
    var B = []
    var C = []

    for (var i = 0; i < 10; i++) {

        let numero = Number(window.prompt((i == 0) ? 'Digite um número A: ' : 'Digite outro número A: '));
        A.push(numero);
        C.push(numero);
        /*
        if(i == 0){
            A.push(Number(window.prompt('Digite um número A: ')))
        } else{
            A.push(Number(window.prompt('Digite outro número A: ')))
        }
        */
        //C.push(A[i])
    }

    for (var i = 0; i < 10; i++) {
        let pergunta = (i == 0) ? 'Digite um número B: ' : 'Digite outro número B: ';
        let numero = Number(window.prompt(pergunta));
        B.push(numero);
        C.push(numero);
        /*
        if(i == 0){
            B.push(Number(window.prompt('Digite um número B: ')))
        } else{ 
            B.push(Number(window.prompt('Digite outro número B: ')))
        }
        C.push(B[i])*/
    }


    for (var i = 0; i < 20; i++) {
        try{
            for (var j = i + 1; j < 20; j++) {

                if (C[i] > C[j]) {
                    x = C[i]
                    C[i] = C[j]
                    C[j] = x
                }
            }            
        }catch{
            console.log('erro')
        }
    }

    console.log(A)
    console.log(B)
    console.log(C)

    do {
        window.alert('Faremos uma pesquisa binária neste algoritmo')
        var pergNum = Number(window.prompt('Entre o número a ser pesquisado: '))

        var comeco = 0
        var final = 20
        var achaNum = false

        while (comeco <= final && (!achaNum)) {
            var meio = parseInt((comeco + final) / 2)

            if (C[meio] == pergNum) {
                achaNum = true
            } else if (pergNum > C[meio]) {
                comeco = meio + 1
            } else {
                final = meio - 1
            }
        }

        let mostra = achaNum ? `O número ${pergNum} na posição ${meio}` : `O número ${pergNum} não foi encontrado`   

        window.alert(mostra)

        /*if (achaNum) {
            window.alert(`O número ${pergNum} na posição ${meio}`)
        } else {
            window.alert(`O número ${pergNum} não foi encontrado`)
        }*/

        var perg = window.prompt('Você deseja continuar? [sim/não]')
    } while (perg == 'sim')
}