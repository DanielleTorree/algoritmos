function executar(){
    var A = []
    var B = []
    
    for(var i = 0; i <= 7; i++){

        A.push(window.prompt('Digite um número:'))
    
        B.push(Number(A[i]))
    
        //console.log(Number(A[i]))
    
        console.log(B[i] = Number(A[i])*3)
    }
}

/*function executar(){
    var A = []
    var B = []
    
    for(var i = 0; i <= 7; i++){
        A.push(window.prompt("Digite um número:"))
    }
    
    for(var i = 0; i <= 7; i++){
        B[i] = Number(A[i]) * 3
    }
    
    for(var i = 0; i <= 7; i++){
        console.log(B[i])
    }
}*/