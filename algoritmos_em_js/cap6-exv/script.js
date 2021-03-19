function executar(){
    var A = []
    var par = 0
    var impar = 0

    for(var i = 0; i < 30; i++){
        A.push(Number(window.prompt('Digite um número aqui: ')))

        if(A[i]%2==0){
            par = par + 1
        } else{
            impar = impar + 1
            //console.log(`${impar} = ${impar} + 1`)
        }
    }

    console.log(A)
    console.log(`Quantidade de números pares: ${par}`)
    console.log(`Quantidade de números ímpares: ${impar}`)    
}