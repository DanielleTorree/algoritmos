function executar(){    
    var A = []
    var B = []

    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um número: '))

        //B.push(-A[i])

        B.push(A[i] * (-1))
    }
    console.log(B)
} 