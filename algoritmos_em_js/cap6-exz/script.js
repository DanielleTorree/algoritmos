function executar(){
    var A = []
    var total = 0
    var cont = 0

    for(var i = 0; i < 10; i++){
        A.push(Number(window.prompt('Digite um número aqui: ')))

        if(A[i]%2!=0){
            cont = cont + 1
        }

        total = total + 1
    }

    var percentual = (cont / total)*100

    console.log(`Total de números ímpares: ${cont}`)
    console.log(`Percentual de números ímpares: ${percentual}%`)

}