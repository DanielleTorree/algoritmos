function executar(){
    var A = []
    var B = []

    for(var i = 0; i < 6; i++){
        A.push(Number(window.prompt('Digite um número')))

        console.log(A[i])
    }
    for(var i = 0; i < 6; i++){
        B.push(Number(window.prompt('Digite um número')))

        console.log(B[i])
    }

    for(var i = 0; i < 6; i++){
        if(i%2!=0){
            A[i-1] = B[i] 
        } else{
            A[i+1] = B[i]
        }
    }

    console.log(A)
    console.log(B)
}