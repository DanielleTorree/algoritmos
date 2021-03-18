function executar(){
    var A = []
    var B = []

    for(var i = 0; i <= 4; i++){
        if(i == 0){
            A.push(window.prompt('Digite uma temperatura aqui: '))
        } else{
            A.push(window.prompt('Digite outra temperatura aqui: '))
        }
        B.push((9/5*A[i])+32)

        console.log(Number(A[i]))
    }
    
    console.log(B)
}