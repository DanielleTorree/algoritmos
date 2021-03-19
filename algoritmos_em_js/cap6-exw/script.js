function executar(){
    var A = []
    var B = []
    var C = []

    for(var i = 0; i < 5; i++){
        A.push(Number(window.prompt('Digite um número: ')))
    }

    for(var i = 0; i < 5; i++){
        B.push(Number(window.prompt('Digite um número: ')))
    }

    for(var i = 0; i < 5; i++){
        C.push((A[i]+B[i])**2)
    }
    console.log(A)
    console.log(B)
    console.log(C)
}
