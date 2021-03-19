function executar(){
    var A = []
    var B = []
    var C = []
    var D = []

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            A.push(window.prompt('Digite um número para A: '))
        } else{
            A.push(window.prompt('Digite outro número para A: '))

        }
    }
    
    for(var i = 0; i <= 4; i++){
        if(i == 0){
            B.push(window.prompt('Digite um número para B: '))
        } else{
            B.push(window.prompt('Digite outro número para B: '))
        }
    }

    for(var i = 0; i <= 4; i++){
        if(i%2!=0){
            C.push(Number(A[i]))
            C.push(Number(B[i]))
        } else{
            D.push(Number(A[i]))
            D.push(Number(B[i]))
        }
    }

    console.log(C)
    console.log(D)
}


