function executar(){
    var A = []
    var B = []
    var C = []

    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um número para o Array A: '))
        C.push(A[i])
    }
    
    for(var i = 0; i <= 4; i++){
        B.push(window.prompt('Digite um número para o Array B: '))
        C.push(B[i])
    }
    
    for(var i = 0; i <= 9; i++){
        console.log(C[i])
    }   
}