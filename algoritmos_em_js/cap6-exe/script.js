function executar(){
    var A = []
    var B = []

    for(var i = 0; i <= 14; i++){
        A.push(window.prompt('Digite um número:'))
    
        B.push(Number(A[i]))
    }

    for(var i = 0; i<= 14; i++){
        var fat = 1

        for(var c = 1; c <= Number(B[i]); c++){
           fat = fat * c
        }
        
        console.log(fat)
    }
}