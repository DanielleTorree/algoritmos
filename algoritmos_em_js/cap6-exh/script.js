function executar(){
    var A = []
    var B = []

    for(var i = 0; i <= 19; i++){
        A.push(window.prompt('Digite um número aqui: '))

    //B.push(A[i])
    }

    for(var i = 0; i <= 19; i++){
        B.push(A[19 - i])
        
        console.log(B[i])
    }

    /*for(var i = 19; i >= 0; i--){
        console.log(B[i])
    }*/
}