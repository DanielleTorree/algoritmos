/*function executar(){
    var A = []
    var B = []
    var soma = 0

    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um número aqui: '))

        soma = soma + Number(A[i])
        B.push(soma)
    }

    console.log(B)
}*/


function executar(){
    var A = []
    var B = []

    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um número aqui: '))
    }

    for(var i = 0; i <= 4; i++){
        var soma = 0

        for(var c = 1; c <= Number(A[i]); c++){
            soma = soma + c
        }

        B.push(soma)
        console.log(soma)
    }

    console.log(B)
}
