function executar(){
    var A = []
    var B = []
    var C = []

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            A.push(Number(window.prompt('Digite um número para A: ')))
        } else{
            A.push(Number(window.prompt('Digite outro número para A: ')))
        }

        if(A[i]%2==0 || A[i]%3==0){
            C.push(A[i])
        }

    }

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            B.push(Number(window.prompt('Digite um número para B: ')))
        } else{
            B.push(Number(window.prompt('Digite outro número para B: ')))
        }

        if(!(B[i]%5==0)){
            C.push(B[i])
        }
    }

    console.log(A)
    console.log(B)
    console.log(C)
}