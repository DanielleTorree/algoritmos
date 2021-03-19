function executar(){
    var res = document.getElementById('res')
    var array = []
    var soma = 0

<<<<<<< HEAD
    for(var i = 0; i <= 4; i++){
        array.push(window.prompt('Digite um número: '))

        if(Number(array[i])%2!=0){
            soma = soma + Number(array[i])

            console.log(soma)
        }
    }

    res.innerHTML = ` Soma : ${soma}`
=======
    var array = []
    var soma = 0

    for(var i = 0; i <= 4 /*array.length*/; i++){
        array.push(window.prompt('Digite um número: '))

        if(Number(array[i]) % 2 != 0){
            soma = soma + Number(array[i])
        }
    }

    res.innerHTML = `Soma = ${soma}`
>>>>>>> 819819d78225fb08b4ae475ac20bbb689e3f5335
}