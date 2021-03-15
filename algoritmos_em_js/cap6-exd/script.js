function executar(){
    var A =[]
    var B = []

    for(var i = 0; i <= 14; i++){
        A.push(window.prompt('Digite um número para A:'))
        
        B.push(Number(A[i]))
        
        B[i] = Number(A[i])**2
 
        console.log('A : ' + A[i])
        console.log('B: ' + B[i])
    }
}