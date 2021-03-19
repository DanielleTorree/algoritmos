function executar(){
    var A = []

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            A.push(window.prompt('Digite uma Temperatura em °C: '))
        } else {
            A.push(window.prompt('Digite outra Temperatura em °C: '))
        }
        
        var maior = Number(A[i])
        var menor = Number(A[i])
    }

    for(var i = 0; i <= 4; i++){
        if(Number(A[i]) > maior){
            maior = Number(A[i])
        }

        if(Number(A[i]) < menor){
            menor = Number(A[i])
        }

        var media = (maior + menor)/2
    }

    console.log(`Maior ${maior}`)
    console.log(`Media ${media}`)
    console.log(`Menor ${menor}`)
}
