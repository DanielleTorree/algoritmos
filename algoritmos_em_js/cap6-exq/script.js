function executar(){
    var A = []
    var B = []

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            A.push(window.prompt('Digite um número: '))
        } else{
            A.push(window.prompt('Digite outro número: '))
        }

        if(i%2==0){
            B[i] = Number(A[i])/2
        } else{
            B[i] = Number(A[i])*1.5
        }
    }

    console.log(B)
}