function executar(){
    var res = document.getElementById('res')

    var array = []
    var soma = 0

    for(var i = 0; i <= 4 /*array.length*/; i++){
        array.push(window.prompt('Digite um número: '))

        if(Number(array[i]) % 2 != 0){
            soma = soma + Number(array[i])
        }
    }

    res.innerHTML = `Soma = ${soma}`
}