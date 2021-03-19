function executar(){
    var A = []
    var B = []

    var AA = []
    for(var i = 0; i <= 4; i++){
        A.push(window.prompt('Digite um número: '))

        AA.push(parseInt(A[i]))

        B.push(A[i] / 2)
    }
    
    console.log(AA)
    console.log(B)
}