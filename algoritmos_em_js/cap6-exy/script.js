function executar(){
    var A = []
    var cont = 0

    for(var i = 0; i < 15; i++){
        A.push(Number(window.prompt('Digite um número aqui: ')))
    
        if(A[i]%2==0){
            cont = cont + 1
        }
    }
    console.log(cont)
}