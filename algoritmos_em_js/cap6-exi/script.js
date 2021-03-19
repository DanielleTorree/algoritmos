function executar(){
    var A = []
    var B = []
    var C = []
    var D = []

    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um valor para A: '))
    }

    for(var i = 0; i <= 4; i++){
        B.push(window.prompt('Digite um valor para B: '))
    }
    
    for(var i = 0; i <= 4; i++){
        C.push(window.prompt('Digite um valor para C: '))
    }

    for(var i = 0; i <= 4; i++){
        D.push(A[i])
    }

    for(var i = 0; i <= 4; i++){
        D.push(B[i])
    }

    for(var i = 0; i <= 4; i++){
        D.push(C[i])
    }

    for(var i = 0; i <= 14; i++){
        console.log(D[i])
    }
}