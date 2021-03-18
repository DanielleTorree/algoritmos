function executar(){
    var A = []
    var B = []
    var C = []

    for(var i = 0; i <= 4; i ++){
        if(i == 0){
            A.push(window.prompt('Digite um número para A: '))
        } else {
            A.push(window.prompt('Digite outro número para A: '))
        }
        
        if(Number(A[i])%2==0){
            C.push(Number(A[i]))
        }
    }

    for(var i = 0; i <= 4; i ++){
        if(i == 0){
            B.push(window.prompt('Digite um número para B: '))
        } else {
            B.push(window.prompt('Digite outro número para B: '))
        }
        
        if(Number(B[i])%2!=0){
            C.push(Number(B[i]))
        }
    }

    console.log(C)
}